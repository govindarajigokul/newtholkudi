(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_request-copy_request-copy-routes_ts"],{

/***/ 45096:
/*!*******************************************************************************!*\
  !*** ./src/app/request-copy/deny-request-copy/deny-request-copy.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DenyRequestCopyComponent: () => (/* binding */ DenyRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/item-request-data.service */ 11122);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../email-request-copy/themed-email-request-copy.component */ 54676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);
























function DenyRequestCopyComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ds-email-request-copy", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("send", function DenyRequestCopyComponent_div_0_div_4_Template_ds_email_request_copy_send_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deny($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, "deny-request-copy.intro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("subject", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 5, ctx_r1.subject$))("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 7, ctx_r1.message$));
  }
}
function DenyRequestCopyComponent_div_0_ds_loading_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading");
  }
}
function DenyRequestCopyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DenyRequestCopyComponent_div_0_div_4_Template, 7, 9, "div", 3)(5, DenyRequestCopyComponent_div_0_ds_loading_5_Template, 1, 0, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRequestRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, "deny-request-copy.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", itemRequestRD_r3 && itemRequestRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !itemRequestRD_r3 || (itemRequestRD_r3 == null ? null : itemRequestRD_r3.isLoading));
  }
}
/**
 * Component for denying an item request
 */
class DenyRequestCopyComponent {
  constructor(router, route, authService, translateService, itemDataService, nameService, itemRequestService, notificationsService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.translateService = translateService;
    this.itemDataService = itemDataService;
    this.nameService = nameService;
    this.itemRequestService = itemRequestService;
    this.notificationsService = notificationsService;
  }
  ngOnInit() {
    this.itemRequestRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.request), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)(), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__.redirectOn4xx)(this.router, this.authService));
    const msgParams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)()), this.authService.getAuthenticatedUserFromStore()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([itemRequest, user]) => {
      return this.itemDataService.findById(itemRequest.itemId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(item => {
        const uri = item.firstMetadataValue('dc.identifier.uri');
        return Object.assign({
          recipientName: itemRequest.requestName,
          itemUrl: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(uri) ? uri : item.handle,
          itemName: this.nameService.getName(item),
          authorName: this.nameService.getName(user),
          authorEmail: user.email
        });
      }));
    }));
    this.subject$ = this.translateService.get('deny-request-copy.email.subject');
    this.message$ = msgParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(params => this.translateService.get('deny-request-copy.email.message', params)));
  }
  /**
   * Deny the item request
   * @param email Subject and contents of the message to send back to the user requesting the item
   */
  deny(email) {
    this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(itemRequest => this.itemRequestService.deny(itemRequest.token, email)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('deny-request-copy.success'));
        this.router.navigateByUrl('/');
      } else {
        this.notificationsService.error(this.translateService.get('deny-request-copy.error'), rd.errorMessage);
      }
    });
  }
  static {
    this.ɵfac = function DenyRequestCopyComponent_Factory(t) {
      return new (t || DenyRequestCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_3__.ItemRequestDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: DenyRequestCopyComponent,
      selectors: [["ds-base-deny-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "mb-4"], [4, "ngIf"], [3, "send", "subject", "message"]],
      template: function DenyRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DenyRequestCopyComponent_div_0_Template, 6, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.itemRequestRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_10__.ThemedEmailRequestCopyComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImRlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVxdWVzdC1jb3B5L2RlbnktcmVxdWVzdC1jb3B5L2RlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNGtCQUE0a0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 11650:
/*!**************************************************************************************!*\
  !*** ./src/app/request-copy/deny-request-copy/themed-deny-request-copy.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedDenyRequestCopyComponent: () => (/* binding */ ThemedDenyRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/theme-support/themed.component */ 8886);
/* harmony import */ var _deny_request_copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deny-request-copy.component */ 45096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedDenyRequestCopyComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for deny-request-copy.component
 */
class ThemedDenyRequestCopyComponent extends src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'DenyRequestCopyComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(44645)(`./${themeName}/app/request-copy/deny-request-copy/deny-request-copy.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./deny-request-copy.component */ 45096));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedDenyRequestCopyComponent_BaseFactory;
      return function ThemedDenyRequestCopyComponent_Factory(t) {
        return (ɵThemedDenyRequestCopyComponent_BaseFactory || (ɵThemedDenyRequestCopyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedDenyRequestCopyComponent)))(t || ThemedDenyRequestCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedDenyRequestCopyComponent,
      selectors: [["ds-deny-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedDenyRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedDenyRequestCopyComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 42178:
/*!*********************************************************************************!*\
  !*** ./src/app/request-copy/email-request-copy/email-request-copy.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRequestCopyComponent: () => (/* binding */ EmailRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _request_copy_email_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-copy-email.model */ 38806);










const _c0 = ["*"];
const _c1 = a0 => ({
  "is-invalid": a0
});
function EmailRequestCopyComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "grant-deny-request-copy.email.subject.empty"), " ");
  }
}
/**
 * A form component for an email to send back to the user requesting an item
 */
class EmailRequestCopyComponent {
  constructor(location) {
    this.location = location;
    /**
     * Event emitter for sending the email
     */
    this.send = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * Submit the email
   */
  submit() {
    this.send.emit(new _request_copy_email_model__WEBPACK_IMPORTED_MODULE_1__.RequestCopyEmail(this.subject, this.message));
  }
  /**
   * Return to the previous page
   */
  return() {
    this.location.back();
  }
  static {
    this.ɵfac = function EmailRequestCopyComponent_Factory(t) {
      return new (t || EmailRequestCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmailRequestCopyComponent,
      selectors: [["ds-base-email-request-copy"]],
      inputs: {
        subject: "subject",
        message: "message"
      },
      outputs: {
        send: "send"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 24,
      vars: 25,
      consts: [[1, "form-group"], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", 1, "form-control", 3, "ngModelChange", "ngClass", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "message"], ["id", "message", "rows", "8", "name", "message", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-row-reverse"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-envelope"], [1, "btn", "btn-outline-secondary", "mr-1", 3, "click", "title"], [1, "fas", "fa-arrow-left"], [1, "invalid-feedback"]],
      template: function EmailRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailRequestCopyComponent_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.subject, $event) || (ctx.subject = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EmailRequestCopyComponent_div_6_Template, 3, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0)(8, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "textarea", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailRequestCopyComponent_Template_textarea_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.message, $event) || (ctx.message = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailRequestCopyComponent_Template_button_click_14_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailRequestCopyComponent_Template_button_click_19_listener() {
            return ctx.return();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, "grant-deny-request-copy.email.subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c1, !ctx.subject || ctx.subject.length === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.subject);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.subject || ctx.subject.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, "grant-deny-request-copy.email.message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 15, "grant-deny-request-copy.email.send"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dsBtnDisabled", !ctx.subject || ctx.subject.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 17, "grant-deny-request-copy.email.send"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 19, "grant-deny-request-copy.email.back"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 21, "grant-deny-request-copy.email.back"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXJlcXVlc3QtY29weS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJlbWFpbC1yZXF1ZXN0LWNvcHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVxdWVzdC1jb3B5L2VtYWlsLXJlcXVlc3QtY29weS9lbWFpbC1yZXF1ZXN0LWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbEJBQWdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38806:
/*!*****************************************************************************!*\
  !*** ./src/app/request-copy/email-request-copy/request-copy-email.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCopyEmail: () => (/* binding */ RequestCopyEmail)
/* harmony export */ });
/**
 * A class representing an email to send back to the user requesting an item
 */
class RequestCopyEmail {
  constructor(subject, message) {
    this.subject = subject;
    this.message = message;
  }
}

/***/ }),

/***/ 54676:
/*!****************************************************************************************!*\
  !*** ./src/app/request-copy/email-request-copy/themed-email-request-copy.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedEmailRequestCopyComponent: () => (/* binding */ ThemedEmailRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/theme-support/themed.component */ 8886);
/* harmony import */ var _email_request_copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-request-copy.component */ 42178);




const _c0 = ["*"];
function ThemedEmailRequestCopyComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for email-request-copy.component
 */
class ThemedEmailRequestCopyComponent extends src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    /**
     * Event emitter for sending the email
     */
    this.send = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.inAndOutputNames = ['send', 'subject', 'message'];
  }
  getComponentName() {
    return 'EmailRequestCopyComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(93911)(`./${themeName}/app/request-copy/email-request-copy/email-request-copy.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./email-request-copy.component */ 42178));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedEmailRequestCopyComponent_BaseFactory;
      return function ThemedEmailRequestCopyComponent_Factory(t) {
        return (ɵThemedEmailRequestCopyComponent_BaseFactory || (ɵThemedEmailRequestCopyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedEmailRequestCopyComponent)))(t || ThemedEmailRequestCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedEmailRequestCopyComponent,
      selectors: [["ds-email-request-copy"]],
      inputs: {
        subject: "subject",
        message: "message"
      },
      outputs: {
        send: "send"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedEmailRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedEmailRequestCopyComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 44052:
/*!*******************************************************************************************!*\
  !*** ./src/app/request-copy/grant-deny-request-copy/grant-deny-request-copy.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrantDenyRequestCopyComponent: () => (/* binding */ GrantDenyRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../request-copy-routing-paths */ 37675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);



















const _c0 = (a0, a1) => ({
  url: a0,
  name: a1
});
function GrantDenyRequestCopyComponent_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 12, "grant-deny-request-copy.intro1", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](29, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 8, ctx_r0.itemUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 10, ctx_r0.itemName$))), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 15, "grant-deny-request-copy.intro2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 17, "grant-deny-request-copy.grant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 19, ctx_r0.grantRoute$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 21, "grant-deny-request-copy.grant"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 23, "grant-deny-request-copy.deny"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 25, ctx_r0.denyRoute$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 27, "grant-deny-request-copy.deny"), " ");
  }
}
function GrantDenyRequestCopyComponent_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 10)(5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "grant-deny-request-copy.processed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 4, "grant-deny-request-copy.home-page"));
  }
}
function GrantDenyRequestCopyComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, GrantDenyRequestCopyComponent_div_0_div_4_div_1_Template, 19, 32, "div", 3)(2, GrantDenyRequestCopyComponent_div_0_div_4_div_2_Template, 8, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRequestRD_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !itemRequestRD_r2.payload.decisionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemRequestRD_r2.payload.decisionDate);
  }
}
function GrantDenyRequestCopyComponent_div_0_ds_loading_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading");
  }
}
function GrantDenyRequestCopyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, GrantDenyRequestCopyComponent_div_0_div_4_Template, 3, 2, "div", 3)(5, GrantDenyRequestCopyComponent_div_0_ds_loading_5_Template, 1, 0, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRequestRD_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "grant-deny-request-copy.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemRequestRD_r2 && itemRequestRD_r2.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !itemRequestRD_r2 || (itemRequestRD_r2 == null ? null : itemRequestRD_r2.isLoading));
  }
}
/**
 * Component for an author to decide to grant or deny an item request
 */
class GrantDenyRequestCopyComponent {
  constructor(router, route, authService, itemDataService, nameService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.itemDataService = itemDataService;
    this.nameService = nameService;
  }
  ngOnInit() {
    this.itemRequestRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(data => data.request), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__.redirectOn4xx)(this.router, this.authService));
    this.itemRD$ = this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(itemRequest => this.itemDataService.findById(itemRequest.itemId)));
    this.itemName$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(item => this.nameService.getName(item)));
    this.itemUrl$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(item => (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__.getItemPageRoute)(item)));
    this.denyRoute$ = this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(itemRequest => (0,_request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_8__.getRequestCopyDenyRoute)(itemRequest.token)));
    this.grantRoute$ = this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(itemRequest => (0,_request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_8__.getRequestCopyGrantRoute)(itemRequest.token)));
  }
  static {
    this.ɵfac = function GrantDenyRequestCopyComponent_Factory(t) {
      return new (t || GrantDenyRequestCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: GrantDenyRequestCopyComponent,
      selectors: [["ds-grant-deny-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "mb-4"], [4, "ngIf"], ["class", "processed-message", 4, "ngIf"], [3, "innerHTML"], [1, "btn-group"], [1, "btn", "btn-outline-primary", 3, "routerLink", "title"], [1, "btn", "btn-outline-danger", 3, "routerLink", "title"], [1, "processed-message"], [1, "text-center"], ["routerLink", "/home", 1, "btn", "btn-primary"]],
      template: function GrantDenyRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, GrantDenyRequestCopyComponent_div_0_Template, 6, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.itemRequestRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYW50LWRlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImdyYW50LWRlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVxdWVzdC1jb3B5L2dyYW50LWRlbnktcmVxdWVzdC1jb3B5L2dyYW50LWRlbnktcmVxdWVzdC1jb3B5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNGxCQUE0bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3218:
/*!*********************************************************************************!*\
  !*** ./src/app/request-copy/grant-request-copy/grant-request-copy.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrantRequestCopyComponent: () => (/* binding */ GrantRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/item-request-data.service */ 11122);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../email-request-copy/themed-email-request-copy.component */ 54676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);




















function GrantRequestCopyComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ds-email-request-copy", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("send", function GrantRequestCopyComponent_div_0_div_4_Template_ds_email_request_copy_send_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.grant($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 5)(11, "div", 6)(12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function GrantRequestCopyComponent_div_0_div_4_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.suggestOpenAccess, $event) || (ctx_r1.suggestOpenAccess = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, "grant-request-copy.intro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subject", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 8, ctx_r1.subject$))("message", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, ctx_r1.message$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 12, "grant-deny-request-copy.email.permissions.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.suggestOpenAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 14, "grant-deny-request-copy.email.permissions.label"));
  }
}
function GrantRequestCopyComponent_div_0_ds_loading_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-loading");
  }
}
function GrantRequestCopyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, GrantRequestCopyComponent_div_0_div_4_Template, 16, 16, "div", 3)(5, GrantRequestCopyComponent_div_0_ds_loading_5_Template, 1, 0, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRequestRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "grant-request-copy.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", itemRequestRD_r3 && itemRequestRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !itemRequestRD_r3 || (itemRequestRD_r3 == null ? null : itemRequestRD_r3.isLoading));
  }
}
/**
 * Component for granting an item request
 */
class GrantRequestCopyComponent {
  constructor(router, route, authService, translateService, itemRequestService, notificationsService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.translateService = translateService;
    this.itemRequestService = itemRequestService;
    this.notificationsService = notificationsService;
    /**
     * Whether or not the item should be open access, to avoid future requests
     * Defaults to false
     */
    this.suggestOpenAccess = false;
  }
  ngOnInit() {
    this.itemRequestRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => data.request), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__.redirectOn4xx)(this.router, this.authService));
    this.subject$ = this.translateService.get('grant-request-copy.email.subject');
  }
  /**
   * Grant the item request
   * @param email Subject and contents of the message to send back to the user requesting the item
   */
  grant(email) {
    this.itemRequestRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(itemRequest => this.itemRequestService.grant(itemRequest.token, email, this.suggestOpenAccess)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('grant-request-copy.success'));
        this.router.navigateByUrl('/');
      } else {
        this.notificationsService.error(this.translateService.get('grant-request-copy.error'), rd.errorMessage);
      }
    });
  }
  static {
    this.ɵfac = function GrantRequestCopyComponent_Factory(t) {
      return new (t || GrantRequestCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemRequestDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: GrantRequestCopyComponent,
      selectors: [["ds-base-grant-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "mb-4"], [4, "ngIf"], [3, "send", "subject", "message"], [1, "mb-3"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "permissions", "name", "permissions", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "permissions", 1, "form-check-label"]],
      template: function GrantRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GrantRequestCopyComponent_div_0_Template, 6, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.itemRequestRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_7__.ThemedEmailRequestCopyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYW50LXJlcXVlc3QtY29weS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJncmFudC1yZXF1ZXN0LWNvcHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVxdWVzdC1jb3B5L2dyYW50LXJlcXVlc3QtY29weS9ncmFudC1yZXF1ZXN0LWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbEJBQWdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95012:
/*!****************************************************************************************!*\
  !*** ./src/app/request-copy/grant-request-copy/themed-grant-request-copy.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedGrantRequestCopyComponent: () => (/* binding */ ThemedGrantRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/theme-support/themed.component */ 8886);
/* harmony import */ var _grant_request_copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grant-request-copy.component */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedGrantRequestCopyComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for grant-request-copy.component
 */
class ThemedGrantRequestCopyComponent extends src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'GrantRequestCopyComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(63572)(`./${themeName}/app/request-copy/grant-request-copy/grant-request-copy.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./grant-request-copy.component */ 3218));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedGrantRequestCopyComponent_BaseFactory;
      return function ThemedGrantRequestCopyComponent_Factory(t) {
        return (ɵThemedGrantRequestCopyComponent_BaseFactory || (ɵThemedGrantRequestCopyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedGrantRequestCopyComponent)))(t || ThemedGrantRequestCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedGrantRequestCopyComponent,
      selectors: [["ds-grant-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedGrantRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedGrantRequestCopyComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 18028:
/*!*****************************************************!*\
  !*** ./src/app/request-copy/request-copy-routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _deny_request_copy_themed_deny_request_copy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deny-request-copy/themed-deny-request-copy.component */ 11650);
/* harmony import */ var _grant_deny_request_copy_grant_deny_request_copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grant-deny-request-copy/grant-deny-request-copy.component */ 44052);
/* harmony import */ var _grant_request_copy_themed_grant_request_copy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grant-request-copy/themed-grant-request-copy.component */ 95012);
/* harmony import */ var _request_copy_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-copy.resolver */ 75905);
/* harmony import */ var _request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-copy-routing-paths */ 37675);





const ROUTES = [{
  path: ':token',
  resolve: {
    request: _request_copy_resolver__WEBPACK_IMPORTED_MODULE_3__.requestCopyResolver
  },
  children: [{
    path: '',
    component: _grant_deny_request_copy_grant_deny_request_copy_component__WEBPACK_IMPORTED_MODULE_1__.GrantDenyRequestCopyComponent
  }, {
    path: _request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_4__.REQUEST_COPY_DENY_PATH,
    component: _deny_request_copy_themed_deny_request_copy_component__WEBPACK_IMPORTED_MODULE_0__.ThemedDenyRequestCopyComponent
  }, {
    path: _request_copy_routing_paths__WEBPACK_IMPORTED_MODULE_4__.REQUEST_COPY_GRANT_PATH,
    component: _grant_request_copy_themed_grant_request_copy_component__WEBPACK_IMPORTED_MODULE_2__.ThemedGrantRequestCopyComponent
  }]
}];

/***/ }),

/***/ 37675:
/*!************************************************************!*\
  !*** ./src/app/request-copy/request-copy-routing-paths.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REQUEST_COPY_DENY_PATH: () => (/* binding */ REQUEST_COPY_DENY_PATH),
/* harmony export */   REQUEST_COPY_GRANT_PATH: () => (/* binding */ REQUEST_COPY_GRANT_PATH),
/* harmony export */   getRequestCopyDenyRoute: () => (/* binding */ getRequestCopyDenyRoute),
/* harmony export */   getRequestCopyGrantRoute: () => (/* binding */ getRequestCopyGrantRoute),
/* harmony export */   getRequestCopyRoute: () => (/* binding */ getRequestCopyRoute)
/* harmony export */ });
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing-paths */ 69799);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/url-combiner/url-combiner */ 45663);


function getRequestCopyRoute(token) {
  return new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__.URLCombiner((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getRequestCopyModulePath)(), token).toString();
}
const REQUEST_COPY_DENY_PATH = 'deny';
function getRequestCopyDenyRoute(token) {
  return new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__.URLCombiner(getRequestCopyRoute(token), REQUEST_COPY_DENY_PATH).toString();
}
const REQUEST_COPY_GRANT_PATH = 'grant';
function getRequestCopyGrantRoute(token) {
  return new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__.URLCombiner(getRequestCopyRoute(token), REQUEST_COPY_GRANT_PATH).toString();
}

/***/ }),

/***/ 75905:
/*!*******************************************************!*\
  !*** ./src/app/request-copy/request-copy.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestCopyResolver: () => (/* binding */ requestCopyResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/item-request-data.service */ 11122);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/operators */ 55757);



const requestCopyResolver = (route, state, itemRequestDataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemRequestDataService)) => {
  return itemRequestDataService.findById(route.params.token).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 44645:
/*!*****************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/request\-copy\/deny\-request\-copy\/deny\-request\-copy\.component$ namespace object ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/request-copy/deny-request-copy/deny-request-copy.component": [
		16917,
		"src_themes_custom_app_request-copy_deny-request-copy_deny-request-copy_component_ts"
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
webpackAsyncContext.id = 44645;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 93911:
/*!*******************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/request\-copy\/email\-request\-copy\/email\-request\-copy\.component$ namespace object ***!
  \*******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/request-copy/email-request-copy/email-request-copy.component": [
		80663,
		"src_themes_custom_app_request-copy_email-request-copy_email-request-copy_component_ts"
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
webpackAsyncContext.id = 93911;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 63572:
/*!*******************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/request\-copy\/grant\-request\-copy\/grant\-request\-copy\.component$ namespace object ***!
  \*******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/request-copy/grant-request-copy/grant-request-copy.component": [
		88611,
		"src_themes_custom_app_request-copy_grant-request-copy_grant-request-copy_component_ts"
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
webpackAsyncContext.id = 63572;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_request-copy_request-copy-routes_ts.js.map