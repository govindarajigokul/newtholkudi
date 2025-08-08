"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_subscriptions-page_subscriptions-page-routes_ts"],{

/***/ 23157:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/subscriptions/subscription-view/subscription-view.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionViewComponent: () => (/* binding */ SubscriptionViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var src_app_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing-paths */ 69799);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../object-collection/shared/badges/type-badge/themed-type-badge.component */ 74448);
/* harmony import */ var _models_subscription_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/subscription.model */ 67478);
/* harmony import */ var _subscription_modal_subscription_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subscription-modal/subscription-modal.component */ 10781);
/* harmony import */ var _subscriptions_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../subscriptions-data.service */ 62355);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);





















const _c0 = ["ds-subscription-view", ""];
function SubscriptionViewComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-type-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p")(3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("object", ctx_r0.dso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx_r0.getPageRoute(ctx_r0.dso));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.dsoNameService.getName(ctx_r0.dso));
  }
}
function SubscriptionViewComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "subscriptions.table.not-available"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, "subscriptions.table.not-available-message"));
  }
}
function SubscriptionViewComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.subscription.subscriptionType);
  }
}
function SubscriptionViewComponent_ng_container_6_span_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SubscriptionViewComponent_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SubscriptionViewComponent_ng_container_6_span_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const parameterList_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "subscriptions.frequency." + parameterList_r2.value), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r3 < ctx_r0.subscription.subscriptionParameterList.length - 1);
  }
}
function SubscriptionViewComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SubscriptionViewComponent_ng_container_6_span_1_Template, 4, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.subscription.subscriptionParameterList);
  }
}
/**
 * Table row representing a subscription that displays all information and action buttons to manage it
 */
class SubscriptionViewComponent {
  constructor(modalService, subscriptionService, dsoNameService) {
    this.modalService = modalService;
    this.subscriptionService = subscriptionService;
    this.dsoNameService = dsoNameService;
    /**
     * When an action is made emit a reload event
     */
    this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  /**
   * Return the route to the dso object page
   */
  getPageRoute(dso) {
    return (0,src_app_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(dso);
  }
  /**
   * Deletes Subscription, show notification on success/failure & updates list
   * @param subscription Subscription to be deleted
   */
  deleteSubscriptionPopup(subscription) {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(subscription.id)) {
      const modalRef = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationModalComponent);
      modalRef.componentInstance.name = this.dsoNameService.getName(this.dso);
      modalRef.componentInstance.headerLabel = 'confirmation-modal.delete-subscription.header';
      modalRef.componentInstance.infoLabel = 'confirmation-modal.delete-subscription.info';
      modalRef.componentInstance.cancelLabel = 'confirmation-modal.delete-subscription.cancel';
      modalRef.componentInstance.confirmLabel = 'confirmation-modal.delete-subscription.confirm';
      modalRef.componentInstance.brandColor = 'danger';
      modalRef.componentInstance.confirmIcon = 'fas fa-trash';
      modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(confirm => {
        if (confirm) {
          this.subscriptionService.deleteSubscription(subscription.id).subscribe(res => {
            this.reload.emit();
          });
        }
      });
    }
  }
  openSubscriptionModal() {
    this.modalRef = this.modalService.open(_subscription_modal_subscription_modal_component__WEBPACK_IMPORTED_MODULE_8__.SubscriptionModalComponent);
    this.modalRef.componentInstance.dso = this.dso;
    this.modalRef.componentInstance.subscription = this.subscription;
    this.modalRef.componentInstance.updateSubscription.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(subscription => {
      this.subscription = subscription;
    });
  }
  static {
    this.ɵfac = function SubscriptionViewComponent_Factory(t) {
      return new (t || SubscriptionViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_subscriptions_data_service__WEBPACK_IMPORTED_MODULE_9__.SubscriptionsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: SubscriptionViewComponent,
      selectors: [["", "ds-subscription-view", ""]],
      inputs: {
        subscription: "subscription",
        dso: "dso",
        eperson: "eperson"
      },
      outputs: {
        reload: "reload"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      attrs: _c0,
      decls: 15,
      vars: 11,
      consts: [[1, "dso-info"], [4, "ngIf"], ["class", "subscription-type", 4, "ngIf"], [1, "subscription-parameters"], [1, "subscription-actions"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", "access-control-editEPersonButton", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-edit", "fa-fw"], [1, "btn", "btn-outline-danger", "btn-sm", "access-control-deleteEPersonButton", 3, "click", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], [3, "object"], [3, "routerLink"], [1, "my-0"], [1, "text-muted", "my-0"], [1, "subscription-type"], [4, "ngFor", "ngForOf"]],
      template: function SubscriptionViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SubscriptionViewComponent_ng_container_1_Template, 5, 3, "ng-container", 1)(2, SubscriptionViewComponent_ng_container_2_Template, 7, 6, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SubscriptionViewComponent_span_4_Template, 2, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, SubscriptionViewComponent_ng_container_6_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 4)(8, "div", 5)(9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubscriptionViewComponent_Template_button_click_9_listener($event) {
            $event.preventDefault();
            return ctx.openSubscriptionModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubscriptionViewComponent_Template_button_click_12_listener() {
            return ctx.deleteSubscriptionPopup(ctx.subscription);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !!ctx.dso);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.dso);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !!ctx.subscription);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !!ctx.subscription);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dsBtnDisabled", !ctx.dso)("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "subscriptions.table.edit"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 9, "subscriptions.table.delete"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_6__.ThemedTypeBadgeComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InN1YnNjcmlwdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3N1YnNjcmlwdGlvbnMvc3Vic2NyaXB0aW9uLXZpZXcvc3Vic2NyaXB0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0a0JBQTRrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 69730:
/*!*****************************************************************!*\
  !*** ./src/app/subscriptions-page/subscriptions-page-routes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _subscriptions_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptions-page.component */ 85190);

const ROUTES = [{
  path: '',
  data: {
    title: 'subscriptions.title'
  },
  children: [{
    path: '',
    component: _subscriptions_page_component__WEBPACK_IMPORTED_MODULE_0__.SubscriptionsPageComponent
  }]
}];

/***/ }),

/***/ 85190:
/*!********************************************************************!*\
  !*** ./src/app/subscriptions-page/subscriptions-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionsPageComponent: () => (/* binding */ SubscriptionsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 66853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 63268);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/page-info.model */ 32089);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_subscriptions_subscription_view_subscription_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/subscriptions/subscription-view/subscription-view.component */ 23157);
/* harmony import */ var _shared_subscriptions_subscriptions_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/subscriptions/subscriptions-data.service */ 62355);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);























function SubscriptionsPageComponent_ds_loading_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ds-loading");
  }
}
function SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("reload", function SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template_tr_reload_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const subscription_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dso", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, subscription_r3 == null ? null : subscription_r3.resource)) == null ? null : tmp_5_0.payload)("eperson", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, subscription_r3 == null ? null : subscription_r3.eperson)) == null ? null : tmp_6_0.payload == null ? null : tmp_6_0.payload.id)("subscription", subscription_r3);
  }
}
function SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-pagination", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template, 3, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const subscriptions_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("paginationOptions", ctx_r1.config)("collectionSize", subscriptions_r4 == null ? null : subscriptions_r4.pageInfo == null ? null : subscriptions_r4.pageInfo.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 9, "subscriptions.table.dso"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 11, "subscriptions.table.subscription_type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 13, "subscriptions.table.subscription_frequency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](16, 15, "subscriptions.table.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", subscriptions_r4 == null ? null : subscriptions_r4.page);
  }
}
function SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "subscriptions.table.empty.message"), " ");
  }
}
function SubscriptionsPageComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template, 19, 17, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template, 3, 4, "ds-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subscriptions_r4 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (subscriptions_r4 == null ? null : subscriptions_r4.pageInfo == null ? null : subscriptions_r4.pageInfo.totalElements) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, ctx_r1.loading$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (subscriptions_r4 == null ? null : subscriptions_r4.pageInfo == null ? null : subscriptions_r4.pageInfo.totalElements) === 0 && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 4, ctx_r1.loading$) !== true);
  }
}
/**
 * List and allow to manage all the active subscription for the current user
 */
class SubscriptionsPageComponent {
  constructor(paginationService, authService, subscriptionService) {
    this.paginationService = paginationService;
    this.authService = authService;
    this.subscriptionService = subscriptionService;
    /**
     * The subscriptions to show on this page, as an Observable list.
     */
    this.subscriptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_1__.buildPaginatedList)(new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_4__.PageInfo(), []));
    /**
     * The current pagination configuration for the page
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_10__.PaginationComponentOptions(), {
      id: 'elp',
      pageSize: 10,
      currentPage: 1
    });
    /**
     * A boolean representing if is loading
     */
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(false);
    /**
     * The rxjs subscription used to retrieve the result list
     */
    this.sub = null;
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__.AlertType;
  }
  /**
   * Retrieve the current eperson id and call method to retrieve the subscriptions
   */
  ngOnInit() {
    this.ePersonId$ = this.authService.getAuthenticatedUserFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(ePerson => ePerson.id), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.shareReplay)({
      refCount: false
    }));
    this.retrieveSubscriptions();
  }
  /**
   * Retrieve subscription list related to the current user.
   * When page is changed it will request the new subscriptions for the new page config
   * @private
   */
  retrieveSubscriptions() {
    this.sub = this.paginationService.getCurrentPagination(this.config.id, this.config).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatestWith)(this.ePersonId$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(() => this.loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(([currentPagination, ePersonId]) => this.subscriptionService.findByEPerson(ePersonId, {
      currentPage: currentPagination.currentPage,
      elementsPerPage: currentPagination.pageSize
    })), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getAllCompletedRemoteData)()).subscribe(res => {
      if (res.hasSucceeded) {
        this.subscriptions$.next(res.payload);
      }
      this.loading$.next(false);
    });
  }
  /**
   * When a subscription is deleted refresh the subscription list
   */
  refresh() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
    this.retrieveSubscriptions();
  }
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function SubscriptionsPageComponent_Factory(t) {
      return new (t || SubscriptionsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_subscriptions_subscriptions_data_service__WEBPACK_IMPORTED_MODULE_12__.SubscriptionsDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: SubscriptionsPageComponent,
      selectors: [["ds-subscriptions-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 9,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12", "m-40"], [4, "ngIf"], [4, "ngVar"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["data-test", "empty-alert", 3, "type", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "formats", "data-test", "subscription-table", 1, "table", "table-striped", "table-hover"], ["scope", "col", 2, "width", "50%"], ["scope", "col"], ["ds-subscription-view", "", 3, "dso", "eperson", "subscription", "reload", 4, "ngFor", "ngForOf"], ["ds-subscription-view", "", 3, "reload", "dso", "eperson", "subscription"], ["data-test", "empty-alert", 3, "type"]],
      template: function SubscriptionsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 1)(7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SubscriptionsPageComponent_ds_loading_8_Template, 1, 0, "ds-loading", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, SubscriptionsPageComponent_ng_container_10_Template, 5, 6, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 3, "subscriptions.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 5, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 7, ctx.subscriptions$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__.ThemedLoadingComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_13__.VarDirective, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgFor, _shared_subscriptions_subscription_view_subscription_view_component__WEBPACK_IMPORTED_MODULE_11__.SubscriptionViewComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzdWJzY3JpcHRpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3Vic2NyaXB0aW9ucy1wYWdlL3N1YnNjcmlwdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdsQkFBZ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_subscriptions-page_subscriptions-page-routes_ts.js.map