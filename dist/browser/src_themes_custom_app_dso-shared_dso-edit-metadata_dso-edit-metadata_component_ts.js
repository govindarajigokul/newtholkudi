"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_dso-shared_dso-edit-metadata_dso-edit-metadata_component_ts"],{

/***/ 46296:
/*!*******************************************************************************************!*\
  !*** ./src/themes/custom/app/dso-shared/dso-edit-metadata/dso-edit-metadata.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataComponent: () => (/* binding */ DsoEditMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata.component */ 54085);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_dso_edit_metadata_field_values_dso_edit_metadata_field_values_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata-field-values/dso-edit-metadata-field-values.component */ 24591);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_dso_edit_metadata_headers_dso_edit_metadata_headers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata-headers/dso-edit-metadata-headers.component */ 40659);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata-value/dso-edit-metadata-value.component */ 80987);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata-value-headers/dso-edit-metadata-value-headers.component */ 28043);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_metadata_field_selector_metadata_field_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/metadata-field-selector/metadata-field-selector.component */ 57227);
/* harmony import */ var _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/shared/alert/alert.component */ 16292);
/* harmony import */ var _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/shared/btn-disabled.directive */ 60456);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);













function DsoEditMetadataComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 10, ctx_r1.dsoType + ".edit.metadata.reinstate-button"), "");
  }
}
function DsoEditMetadataComponent_div_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r1.dsoType + ".edit.metadata.discard-button"))("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 10, ctx_r1.dsoType + ".edit.metadata.discard-button"), "");
  }
}
function DsoEditMetadataComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "ds-metadata-field-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("mdFieldChange", function DsoEditMetadataComponent_div_0_div_23_Template_ds_metadata_field_selector_mdFieldChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.newMdField, $event) || (ctx_r1.newMdField = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 27)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ds-dso-edit-metadata-value-headers", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ds-dso-edit-metadata-value", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("confirm", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_confirm_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.confirmNewValue($event));
    })("remove", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_remove_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.form.newValue = undefined);
    })("undo", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_undo_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.form.newValue = undefined);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("mdField", ctx_r1.newMdField);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dso", ctx_r1.dso)("mdValue", ctx_r1.form.newValue)("dsoType", ctx_r1.dsoType)("saving$", ctx_r1.savingOrLoadingFieldValidation$)("isOnlyValue", true)("mdField", ctx_r1.newMdField);
  }
}
function DsoEditMetadataComponent_div_0_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_div_24_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const mdField_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r1.form.resetOrder(mdField_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onValueSaved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r1.dsoType + ".edit.metadata.reset-order-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DsoEditMetadataComponent_div_0_div_24_div_4_Template, 3, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ds-dso-edit-metadata-field-values", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueSaved", function DsoEditMetadataComponent_div_0_div_24_Template_ds_dso_edit_metadata_field_values_valueSaved_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onValueSaved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdField_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](mdField_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.hasOrderChanges(mdField_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dso", ctx_r1.dso)("form", ctx_r1.form)("dsoType", ctx_r1.dsoType)("saving$", ctx_r1.saving$)("draggingMdField$", ctx_r1.draggingMdField$)("mdField", mdField_r8);
  }
}
function DsoEditMetadataComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ds-alert", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("content", ctx_r1.dsoType + ".edit.metadata.empty")("type", ctx_r1.AlertTypeEnum.Info);
  }
}
function DsoEditMetadataComponent_div_0_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 10, ctx_r1.dsoType + ".edit.metadata.reinstate-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r1.dsoType + ".edit.metadata.discard-button"))("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 10, ctx_r1.dsoType + ".edit.metadata.discard-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, DsoEditMetadataComponent_div_0_button_10_Template, 8, 12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, DsoEditMetadataComponent_div_0_button_19_Template, 8, 12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "ds-dso-edit-metadata-headers", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, DsoEditMetadataComponent_div_0_div_23_Template, 7, 10, "div", 13)(24, DsoEditMetadataComponent_div_0_div_24_Template, 6, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, DsoEditMetadataComponent_div_0_div_25_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15)(27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, DsoEditMetadataComponent_div_0_button_28_Template, 7, 12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, DsoEditMetadataComponent_div_0_button_36_Template, 7, 12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", ctx_r1.form.newValue || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 21, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 23, ctx_r1.dsoType + ".edit.metadata.add-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 25, ctx_r1.dsoType + ".edit.metadata.add-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 27, ctx_r1.dsoType + ".edit.metadata.add-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 29, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 31, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 33, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 35, ctx_r1.dsoType + ".edit.metadata.save-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 37, "item.edit.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.newValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.form.fieldKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isEmpty && !ctx_r1.form.newValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 39, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 41, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 43, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 45, ctx_r1.dsoType + ".edit.metadata.save-button"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isReinstatable);
  }
}
function DsoEditMetadataComponent_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading");
  }
}
class DsoEditMetadataComponent extends _app_dso_shared_dso_edit_metadata_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_0__.DsoEditMetadataComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDsoEditMetadataComponent_BaseFactory;
      return function DsoEditMetadataComponent_Factory(t) {
        return (ɵDsoEditMetadataComponent_BaseFactory || (ɵDsoEditMetadataComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](DsoEditMetadataComponent)))(t || DsoEditMetadataComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DsoEditMetadataComponent,
      selectors: [["ds-themed-dso-edit-metadata"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "item-metadata", 4, "ngIf"], [4, "ngIf"], [1, "item-metadata"], [1, "button-row", "top", "d-flex", "my-2", "space-children-mr", "ml-gap"], ["id", "dso-add-btn", 1, "mr-auto", "btn", "btn-success", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline"], ["class", "btn btn-warning ml-1", "id", "dso-reinstate-btn", 3, "dsBtnDisabled", "title", "click", 4, "ngIf"], ["id", "dso-save-btn", 1, "btn", "btn-primary", "ml-1", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-save"], ["class", "btn btn-danger ml-1", "id", "dso-discard-btn", 3, "title", "dsBtnDisabled", "click", 4, "ngIf"], ["role", "table"], [3, "dsoType"], ["class", "d-flex flex-row ds-field-row", "role", "row", 4, "ngIf"], ["class", "d-flex flex-row ds-field-row", "role", "row", 4, "ngFor", "ngForOf"], [1, "button-row", "bottom", "d-inline-block", "w-100"], [1, "mt-2", "float-right", "space-children-mr", "ml-gap"], ["class", "btn btn-warning", 3, "dsBtnDisabled", "title", "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled", "title"], ["class", "btn btn-danger", 3, "title", "dsBtnDisabled", "click", 4, "ngIf"], ["id", "dso-reinstate-btn", 1, "btn", "btn-warning", "ml-1", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-undo-alt"], ["id", "dso-discard-btn", 1, "btn", "btn-danger", "ml-1", 3, "click", "title", "dsBtnDisabled"], ["aria-hidden", "true", 1, "fas", "fa-times"], ["role", "row", 1, "d-flex", "flex-row", "ds-field-row"], ["role", "rowheader", 1, "lbl-cell", "ds-success"], [3, "mdFieldChange", "dsoType", "mdField", "autofocus"], ["role", "cell", 1, "flex-grow-1", "ds-drop-list"], ["role", "presentation", 3, "dsoType"], [3, "confirm", "remove", "undo", "dso", "mdValue", "dsoType", "saving$", "isOnlyValue", "mdField"], ["role", "rowheader", 1, "lbl-cell"], [1, "dont-break-out", "preserve-line-breaks"], ["class", "btn btn-warning reset-order-button mt-2 w-100", 3, "click", 4, "ngIf"], ["role", "cell", 1, "flex-grow-1", 3, "valueSaved", "dso", "form", "dsoType", "saving$", "draggingMdField$", "mdField"], [1, "btn", "btn-warning", "reset-order-button", "mt-2", "w-100", 3, "click"], [3, "content", "type"], [1, "btn", "btn-warning", 3, "click", "dsBtnDisabled", "title"], [1, "btn", "btn-danger", 3, "click", "title", "dsBtnDisabled"]],
      template: function DsoEditMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DsoEditMetadataComponent_div_0_Template, 37, 47, "div", 0)(1, DsoEditMetadataComponent_ds_loading_1_Template, 1, 0, "ds-loading", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _app_dso_shared_dso_edit_metadata_dso_edit_metadata_headers_dso_edit_metadata_headers_component__WEBPACK_IMPORTED_MODULE_2__.DsoEditMetadataHeadersComponent, _app_dso_shared_dso_edit_metadata_metadata_field_selector_metadata_field_selector_component__WEBPACK_IMPORTED_MODULE_5__.MetadataFieldSelectorComponent, _app_dso_shared_dso_edit_metadata_dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_4__.DsoEditMetadataValueHeadersComponent, _app_dso_shared_dso_edit_metadata_dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_3__.DsoEditMetadataValueComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _app_dso_shared_dso_edit_metadata_dso_edit_metadata_field_values_dso_edit_metadata_field_values_component__WEBPACK_IMPORTED_MODULE_1__.DsoEditMetadataFieldValuesComponent, _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.lbl-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-field-width);\n  max-width: var(--ds-dso-edit-field-width);\n  background-color: var(--bs-gray-100);\n  font-weight: bold;\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.lbl-cell.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n  border: 1px solid var(--bs-success);\n}\n\n.ds-field-row[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-gray-400);\n}\n\n.reset-order-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGJsLWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWZpZWxkLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktMjAwKTtcbn1cbi5sYmwtY2VsbC5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5yZXNldC1vcmRlci1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFDQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7QUFDQSxnM0NBQWczQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGJsLWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWZpZWxkLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktMjAwKTtcbn1cbi5sYmwtY2VsbC5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5yZXNldC1vcmRlci1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_dso-shared_dso-edit-metadata_dso-edit-metadata_component_ts.js.map