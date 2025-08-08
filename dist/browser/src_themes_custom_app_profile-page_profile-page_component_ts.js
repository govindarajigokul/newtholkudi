"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_profile-page_profile-page_component_ts"],{

/***/ 37879:
/*!**********************************************************************!*\
  !*** ./src/themes/custom/app/profile-page/profile-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/notifications/suggestions-notification/suggestions-notification.component */ 85343);
/* harmony import */ var _app_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/profile-page/profile-page.component */ 60676);
/* harmony import */ var _app_profile_page_profile_page_metadata_form_themed_profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/profile-page/profile-page-metadata-form/themed-profile-page-metadata-form.component */ 87370);
/* harmony import */ var _app_profile_page_profile_page_researcher_form_profile_page_researcher_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/profile-page/profile-page-researcher-form/profile-page-researcher-form.component */ 12474);
/* harmony import */ var _app_profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/profile-page/profile-page-security-form/profile-page-security-form.component */ 13738);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/shared/pagination/pagination.component */ 40590);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);













function ProfilePageComponent_ng_container_0_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8)(6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ds-profile-page-researcher-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ds-suggestions-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, "profile.card.researcher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("user", user_r2);
  }
}
function ProfilePageComponent_ng_container_0_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 8)(5, "ds-profile-page-security-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("isInvalid", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_isInvalid_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.setInvalid($event));
    })("passwordValue", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_passwordValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.setPasswordValue($event));
    })("currentPasswordValue", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_currentPasswordValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.setCurrentPasswordValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "profile.card.security"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("FORM_PREFIX", "profile.security.form.");
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.dsoNameService.getName(group_r5));
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const groups_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "profile.groups.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", groups_r6);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_Template, 6, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groups_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (groups_r6 == null ? null : groups_r6.length) > 0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groupsRD_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("hidePaginationDetail", true)("paginationOptions", ctx_r3.optionsGroupsPagination)("collectionSize", groupsRD_r7 == null ? null : groupsRD_r7.payload == null ? null : groupsRD_r7.payload.totalElements);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.payload == null ? null : groupsRD_r7.payload.page);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_Template, 2, 6, "ds-pagination", 19);
  }
  if (rf & 2) {
    const groupsRD_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.payload);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showMessage", false);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ds_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "error.profile-groups"));
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_container_1_Template, 1, 0, "ng-container", 17)(2, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(4, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(6, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ds_error_6_Template, 2, 3, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groupsRD_r7 = ctx.ngIf;
    const content_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const loader_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (groupsRD_r7 == null ? null : groupsRD_r7.isLoading) ? loader_r9 : content_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.hasFailed);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specialGroup_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.dsoNameService.getName(specialGroup_r10), " ");
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28)(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specialGroups_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "profile.special.groups.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", specialGroups_r11);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_Template, 6, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const specialGroups_r11 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (specialGroups_r11 == null ? null : specialGroups_r11.length) > 0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfilePageComponent_ng_container_0_div_1_ng_container_4_Template, 9, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ds-profile-page-metadata-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ProfilePageComponent_ng_container_0_div_1_div_12_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePageComponent_ng_container_0_div_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.updateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ProfilePageComponent_ng_container_0_div_1_ng_container_19_Template, 7, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ProfilePageComponent_ng_container_0_div_1_ng_container_21_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, "profile.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 10, ctx_r3.isResearcherProfileEnabled$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 12, "profile.card.identify"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("user", user_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 14, ctx_r3.canChangePassword$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 16, "profile.form.submit"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 18, ctx_r3.groupsRD$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 20, ctx_r3.specialGroupsRD$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.page);
  }
}
function ProfilePageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_Template, 23, 22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", user_r2);
  }
}
/**
 * Component for a user to edit their profile information
 */
class ProfilePageComponent extends _app_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__.ProfilePageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵProfilePageComponent_BaseFactory;
      return function ProfilePageComponent_Factory(t) {
        return (ɵProfilePageComponent_BaseFactory || (ɵProfilePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](ProfilePageComponent)))(t || ProfilePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfilePageComponent,
      selectors: [["ds-themed-profile-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["content", ""], ["loader", ""], [4, "ngVar"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [3, "user"], ["class", "card mb-4 security-section", 4, "ngIf"], [1, "col-12", "text-right", "pr-0"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-edit"], [1, "mb-4"], [1, "card", "mb-4", "security-section"], [3, "isInvalid", "passwordValue", "currentPasswordValue", "FORM_PREFIX"], [4, "ngTemplateOutlet"], [3, "message", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize"], [1, "mt-4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "showMessage"], [3, "message"], ["data-test", "specialGroups", 4, "ngIf"], ["data-test", "specialGroups"]],
      template: function ProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProfilePageComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      dependencies: [_app_profile_page_profile_page_metadata_form_themed_profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_2__.ThemedProfilePageMetadataFormComponent, _app_profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_4__.ProfilePageSecurityFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _app_profile_page_profile_page_researcher_form_profile_page_researcher_form_component__WEBPACK_IMPORTED_MODULE_3__.ProfilePageResearcherFormComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_8__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _app_notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_0__.SuggestionsNotificationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__.ThemedLoadingComponent, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdrQkFBZ2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_profile-page_profile-page_component_ts.js.map