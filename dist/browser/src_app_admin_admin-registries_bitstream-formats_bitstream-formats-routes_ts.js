"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-registries_bitstream-formats_bitstream-formats-routes_ts"],{

/***/ 54285:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/add-bitstream-format/add-bitstream-format.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBitstreamFormatComponent: () => (/* binding */ AddBitstreamFormatComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/data/bitstream-format-data.service */ 4856);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin-registries-routing-paths */ 26479);
/* harmony import */ var _format_form_format_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format-form/format-form.component */ 27401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);












/**
 * This component renders the page to create a new bitstream format.
 */
class AddBitstreamFormatComponent {
  constructor(router, notificationService, translateService, bitstreamFormatDataService) {
    this.router = router;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.bitstreamFormatDataService = bitstreamFormatDataService;
  }
  /**
   * Creates a new bitstream format based on the provided bitstream format emitted by the form.
   * When successful, a success notification will be shown and the user will be navigated back to the overview page.
   * When failed, an error  notification will be shown.
   * @param bitstreamFormat
   */
  createBitstreamFormat(bitstreamFormat) {
    this.bitstreamFormatDataService.createBitstreamFormat(bitstreamFormat).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
      if (response.hasSucceeded) {
        this.notificationService.success(this.translateService.get('admin.registries.bitstream-formats.create.success.head'), this.translateService.get('admin.registries.bitstream-formats.create.success.content'));
        this.router.navigate([(0,_admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getBitstreamFormatsModuleRoute)()]);
        this.bitstreamFormatDataService.clearBitStreamFormatRequests().subscribe();
      } else {
        this.notificationService.error(this.translateService.get('admin.registries.bitstream-formats.create.failure.head'), this.translateService.get('admin.registries.bitstream-formats.create.failure.content'));
      }
    });
  }
  static {
    this.ɵfac = function AddBitstreamFormatComponent_Factory(t) {
      return new (t || AddBitstreamFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamFormatDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AddBitstreamFormatComponent,
      selectors: [["ds-add-bitstream-format"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-12", "mb-4"], ["id", "sub-header", 1, "border-bottom", "pb-2"], [3, "updatedFormat"]],
      template: function AddBitstreamFormatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ds-bitstream-format-form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("updatedFormat", function AddBitstreamFormatComponent_Template_ds_bitstream_format_form_updatedFormat_6_listener($event) {
            return ctx.createBitstreamFormat($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "admin.registries.bitstream-formats.create.new"));
        }
      },
      dependencies: [_format_form_format_form_component__WEBPACK_IMPORTED_MODULE_4__.FormatFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 83240:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/bitstream-formats-routes.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _add_bitstream_format_add_bitstream_format_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bitstream-format/add-bitstream-format.component */ 54285);
/* harmony import */ var _bitstream_formats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitstream-formats.component */ 44612);
/* harmony import */ var _bitstream_formats_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bitstream-formats.resolver */ 70786);
/* harmony import */ var _edit_bitstream_format_edit_bitstream_format_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-bitstream-format/edit-bitstream-format.component */ 39253);





const BITSTREAMFORMAT_EDIT_PATH = ':id/edit';
const BITSTREAMFORMAT_ADD_PATH = 'add';
const providers = [];
const ROUTES = [{
  path: '',
  providers,
  component: _bitstream_formats_component__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatsComponent
}, {
  path: BITSTREAMFORMAT_ADD_PATH,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  component: _add_bitstream_format_add_bitstream_format_component__WEBPACK_IMPORTED_MODULE_1__.AddBitstreamFormatComponent,
  data: {
    breadcrumbKey: 'admin.registries.bitstream-formats.create'
  }
}, {
  path: BITSTREAMFORMAT_EDIT_PATH,
  providers,
  component: _edit_bitstream_format_edit_bitstream_format_component__WEBPACK_IMPORTED_MODULE_4__.EditBitstreamFormatComponent,
  resolve: {
    bitstreamFormat: _bitstream_formats_resolver__WEBPACK_IMPORTED_MODULE_3__.bitstreamFormatsResolver,
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'admin.registries.bitstream-formats.edit'
  }
}];

/***/ }),

/***/ 44612:
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/bitstream-formats.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitstreamFormatsComponent: () => (/* binding */ BitstreamFormatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 50047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/bitstream-format-data.service */ 4856);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);















const _c0 = a0 => ["/admin/registries/bitstream-formats", a0, "edit"];
function BitstreamFormatsComponent_ds_pagination_13_tr_23_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "admin.registries.bitstream-formats.table.internal"), ")");
  }
}
function BitstreamFormatsComponent_ds_pagination_13_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 17)(3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BitstreamFormatsComponent_ds_pagination_13_tr_23_Template_input_change_3_listener($event) {
      const bitstreamFormat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.selectBitStreamFormat(bitstreamFormat_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td")(13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td")(16, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, BitstreamFormatsComponent_ds_pagination_13_tr_23_span_18_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td")(20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const bitstreamFormat_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 12, ctx_r2.selectedBitstreamFormatIDs$)) == null ? null : tmp_3_0.includes(bitstreamFormat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 14, "admin.registries.bitstream-formats.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 16, "admin.registries.bitstream-formats.select"), "}");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, bitstreamFormat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](bitstreamFormat_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, bitstreamFormat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](bitstreamFormat_r2.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c0, bitstreamFormat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", bitstreamFormat_r2.mimetype, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", bitstreamFormat_r2.internal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, bitstreamFormat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 18, "admin.registries.bitstream-formats.table.supportLevel." + bitstreamFormat_r2.supportLevel));
  }
}
function BitstreamFormatsComponent_ds_pagination_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-pagination", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 12)(3, "table", 13)(4, "thead")(5, "tr")(6, "th", 14)(7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, BitstreamFormatsComponent_ds_pagination_13_tr_23_Template, 23, 28, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_10_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("paginationOptions", ctx_r2.pageConfig)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 10, ctx_r2.bitstreamFormats$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("hideGear", false)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 12, "admin.registries.bitstream-formats.table.selected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 14, "admin.registries.bitstream-formats.table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 16, "admin.registries.bitstream-formats.table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 18, "admin.registries.bitstream-formats.table.mimetype"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 20, "admin.registries.bitstream-formats.table.supportLevel.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 22, ctx_r2.bitstreamFormats$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.page);
  }
}
function BitstreamFormatsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "admin.registries.bitstream-formats.no-items"), " ");
  }
}
function BitstreamFormatsComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BitstreamFormatsComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deselectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "admin.registries.bitstream-formats.table.deselect-all"));
  }
}
function BitstreamFormatsComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BitstreamFormatsComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteFormats());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "admin.registries.bitstream-formats.table.delete"));
  }
}
/**
 * This component renders a list of bitstream formats
 */
class BitstreamFormatsComponent {
  constructor(notificationsService, translateService, bitstreamFormatService, paginationService) {
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.bitstreamFormatService = bitstreamFormatService;
    this.paginationService = paginationService;
    /**
     * The current pagination configuration for the page
     * Currently simply renders all bitstream formats
     */
    this.pageConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__.PaginationComponentOptions(), {
      id: 'rbp',
      pageSize: 20,
      pageSizeOptions: [20, 40, 60, 80, 100]
    });
  }
  /**
   * Deletes the currently selected formats from the registry and updates the presented list
   */
  deleteFormats() {
    this.bitstreamFormatService.clearBitStreamFormatRequests();
    this.bitstreamFormatService.getSelectedBitstreamFormats().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1),
    // emit all formats in the array one at a time
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(formats => formats),
    // delete each format
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(format => this.bitstreamFormatService.delete(format.id).pipe(
    // wait for each response to come back
    (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(),
    // return a boolean to indicate whether a response succeeded
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => response.hasSucceeded))),
    // wait for all responses to come in and return them as a single array
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.toArray)()).subscribe(results => {
      // Count the number of succeeded and failed deletions
      const successResponses = results.filter(result => result);
      const failedResponses = results.filter(result => !result);
      // Show a notification indicating the number of succeeded and failed deletions
      if (successResponses.length > 0) {
        this.showNotification(true, successResponses.length);
      }
      if (failedResponses.length > 0) {
        this.showNotification(false, failedResponses.length);
      }
      // reset the selection
      this.deselectAll();
      // reload the page
      this.paginationService.resetPage(this.pageConfig.id);
    });
  }
  /**
   * Deselects all selecetd bitstream formats
   */
  deselectAll() {
    this.bitstreamFormatService.deselectAllBitstreamFormats();
  }
  /**
   * Returns the list of all the bitstream formats that are selected in the list (checkbox)
   */
  selectedBitstreamFormatIDs() {
    return this.bitstreamFormatService.getSelectedBitstreamFormats().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(bitstreamFormats => bitstreamFormats.map(selectedFormat => selectedFormat.id)));
  }
  /**
   * Selects or deselects a bitstream format based on the checkbox state
   * @param bitstreamFormat
   * @param event
   */
  selectBitStreamFormat(bitstreamFormat, event) {
    event.target.checked ? this.bitstreamFormatService.selectBitstreamFormat(bitstreamFormat) : this.bitstreamFormatService.deselectBitstreamFormat(bitstreamFormat);
  }
  /**
   * Show notifications for an amount of deleted bitstream formats
   * @param success   Whether or not the notification should be a success message (error message when false)
   * @param amount    The amount of deleted bitstream formats
   */
  showNotification(success, amount) {
    const prefix = 'admin.registries.bitstream-formats.delete';
    const suffix = success ? 'success' : 'failure';
    const head = this.translateService.instant(`${prefix}.${suffix}.head`);
    const content = this.translateService.instant(`${prefix}.${suffix}.amount`, {
      amount: amount
    });
    if (success) {
      this.notificationsService.success(head, content);
    } else {
      this.notificationsService.error(head, content);
    }
  }
  ngOnInit() {
    this.bitstreamFormats$ = this.paginationService.getFindListOptions(this.pageConfig.id, this.pageConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(findListOptions => {
      return this.bitstreamFormatService.findAll(findListOptions);
    }));
    this.selectedBitstreamFormatIDs$ = this.selectedBitstreamFormatIDs();
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.pageConfig.id);
  }
  static {
    this.ɵfac = function BitstreamFormatsComponent_Factory(t) {
      return new (t || BitstreamFormatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamFormatDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: BitstreamFormatsComponent,
      selectors: [["ds-bitstream-formats"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 22,
      consts: [[1, "container"], [1, "bitstream-formats", "row"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["id", "description"], ["id", "create-new", 1, "mb-2"], [1, "btn", "btn-success", 3, "routerLink"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["class", "btn btn-primary deselect", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-danger float-right", 3, "click", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "formats", 1, "table", "table-striped", "table-hover"], ["scope", "col"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [1, "mb-0"], ["type", "checkbox", 3, "change", "checked"], [3, "routerLink"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-info"], [1, "btn", "btn-primary", "deselect", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "float-right", 3, "click"]],
      template: function BitstreamFormatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 5)(10, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, BitstreamFormatsComponent_ds_pagination_13_Template, 25, 24, "ds-pagination", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BitstreamFormatsComponent_div_15_Template, 3, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, BitstreamFormatsComponent_button_18_Template, 3, 3, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, BitstreamFormatsComponent_button_20_Template, 3, 3, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, "admin.registries.bitstream-formats.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 10, "admin.registries.bitstream-formats.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 12, "admin.registries.bitstream-formats.create.new"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 14, ctx.bitstreamFormats$)) == null ? null : tmp_4_0.payload == null ? null : tmp_4_0.payload.totalElements) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 16, ctx.bitstreamFormats$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.totalElements) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 18, ctx.bitstreamFormats$)) == null ? null : tmp_6_0.payload == null ? null : tmp_6_0.payload.page == null ? null : tmp_6_0.payload.page.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 20, ctx.bitstreamFormats$)) == null ? null : tmp_7_0.payload == null ? null : tmp_7_0.payload.page == null ? null : tmp_7_0.payload.page.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 70786:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/bitstream-formats.resolver.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitstreamFormatsResolver: () => (/* binding */ bitstreamFormatsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/bitstream-format-data.service */ 4856);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);



/**
 * Method for resolving an bitstreamFormat based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state
 * @param {BitstreamFormatDataService} bitstreamFormatDataService The BitstreamFormatDataService
 * @returns Observable<<RemoteData<BitstreamFormat>> Emits the found bitstreamFormat based on the parameters in the current route,
 * or an error if something went wrong
 */
const bitstreamFormatsResolver = (route, state, bitstreamFormatDataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamFormatDataService)) => {
  return bitstreamFormatDataService.findById(route.params.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 39253:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/edit-bitstream-format/edit-bitstream-format.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditBitstreamFormatComponent: () => (/* binding */ EditBitstreamFormatComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/data/bitstream-format-data.service */ 4856);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin-registries-routing-paths */ 26479);
/* harmony import */ var _format_form_format_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format-form/format-form.component */ 27401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);














const _c0 = a0 => ({
  format: a0
});
/**
 * This component renders the edit page of a bitstream format.
 * The route parameter 'id' is used to request the bitstream format.
 */
class EditBitstreamFormatComponent {
  constructor(route, router, notificationService, translateService, bitstreamFormatDataService) {
    this.route = route;
    this.router = router;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.bitstreamFormatDataService = bitstreamFormatDataService;
  }
  ngOnInit() {
    this.bitstreamFormatRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.bitstreamFormat));
  }
  /**
   * Updates the bitstream format based on the provided bitstream format emitted by the form.
   * When successful, a success notification will be shown and the user will be navigated back to the overview page.
   * When failed, an error  notification will be shown.
   */
  updateFormat(bitstreamFormat) {
    this.bitstreamFormatDataService.updateBitstreamFormat(bitstreamFormat).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
      if (response.hasSucceeded) {
        this.notificationService.success(this.translateService.get('admin.registries.bitstream-formats.edit.success.head'), this.translateService.get('admin.registries.bitstream-formats.edit.success.content'));
        this.router.navigate([(0,_admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getBitstreamFormatsModuleRoute)()]);
      } else {
        this.notificationService.error('admin.registries.bitstream-formats.edit.failure.head', 'admin.registries.bitstream-formats.create.edit.content');
      }
    });
  }
  static {
    this.ɵfac = function EditBitstreamFormatComponent_Factory(t) {
      return new (t || EditBitstreamFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamFormatDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: EditBitstreamFormatComponent,
      selectors: [["ds-edit-bitstream-format"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 11,
      consts: [[1, "container"], [1, "row"], [1, "col-12", "mb-4"], ["id", "sub-header", 1, "border-bottom", "pb-2"], [3, "updatedFormat", "bitstreamFormat"]],
      template: function EditBitstreamFormatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ds-bitstream-format-form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("updatedFormat", function EditBitstreamFormatComponent_Template_ds_bitstream_format_form_updatedFormat_7_listener($event) {
            return ctx.updateFormat($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 4, "admin.registries.bitstream-formats.edit.head", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, ctx.bitstreamFormatRD$)) == null ? null : tmp_0_0.payload.shortDescription)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bitstreamFormat", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, ctx.bitstreamFormatRD$)) == null ? null : tmp_1_0.payload);
        }
      },
      dependencies: [_format_form_format_form_component__WEBPACK_IMPORTED_MODULE_4__.FormatFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 27401:
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/bitstream-formats/format-form/format-form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatFormComponent: () => (/* binding */ FormatFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 88280);
/* harmony import */ var _core_shared_bitstream_format_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/bitstream-format.model */ 760);
/* harmony import */ var _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/bitstream-format-support-level */ 70334);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/form/form.component */ 99386);
/* harmony import */ var _admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin-registries-routing-paths */ 26479);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);












function FormatFormComponent_ds_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submitForm", function FormatFormComponent_ds_form_0_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSubmit());
    })("cancel", function FormatFormComponent_ds_form_0_Template_ds_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formId", "comcol-form-id")("formModel", ctx_r1.formModel);
  }
}
/**
 * The component responsible for rendering the form to create/edit a bitstream format
 */
class FormatFormComponent {
  constructor(router) {
    this.router = router;
    /**
     * The current bitstream format
     * This can either be and existing one or a new one
     */
    this.bitstreamFormat = new _core_shared_bitstream_format_model__WEBPACK_IMPORTED_MODULE_1__.BitstreamFormat();
    /**
     * EventEmitter that will emit the updated bitstream format
     */
    this.updatedFormat = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * The different supported support level of the bitstream format
     */
    this.supportLevelOptions = [{
      label: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Known,
      value: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Known
    }, {
      label: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Unknown,
      value: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Unknown
    }, {
      label: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Supported,
      value: _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_2__.BitstreamFormatSupportLevel.Supported
    }];
    /**
     * Styling element for repeatable field
     */
    this.arrayElementLayout = {
      grid: {
        group: 'form-row'
      }
    };
    /**
     * Styling element for element of repeatable field
     */
    this.arrayInputElementLayout = {
      grid: {
        host: 'col'
      }
    };
    /**
     * The form model representing the bitstream format
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'shortDescription',
      name: 'shortDescription',
      label: 'admin.registries.bitstream-formats.edit.shortDescription.label',
      hint: 'admin.registries.bitstream-formats.edit.shortDescription.hint',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'Please enter a name for this bitstream format'
      }
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'mimetype',
      name: 'mimetype',
      label: 'admin.registries.bitstream-formats.edit.mimetype.label',
      hint: 'admin.registries.bitstream-formats.edit.mimetype.hint'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicTextAreaModel({
      id: 'description',
      name: 'description',
      label: 'admin.registries.bitstream-formats.edit.description.label',
      hint: 'admin.registries.bitstream-formats.edit.description.hint',
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicSelectModel({
      id: 'supportLevel',
      name: 'supportLevel',
      options: this.supportLevelOptions,
      label: 'admin.registries.bitstream-formats.edit.supportLevel.label',
      hint: 'admin.registries.bitstream-formats.edit.supportLevel.hint',
      value: this.supportLevelOptions[0].value
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicCheckboxModel({
      id: 'internal',
      name: 'internal',
      label: 'Internal',
      hint: 'admin.registries.bitstream-formats.edit.internal.hint'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicFormArrayModel({
      id: 'extensions',
      name: 'extensions',
      label: 'admin.registries.bitstream-formats.edit.extensions.label',
      groupFactory: () => [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
        id: 'extension',
        placeholder: 'admin.registries.bitstream-formats.edit.extensions.placeholder'
      }, this.arrayInputElementLayout)]
    }, this.arrayElementLayout)];
  }
  ngOnInit() {
    this.initValues();
  }
  /**
   * Initializes the form based on the provided bitstream format
   */
  initValues() {
    this.formModel.forEach(fieldModel => {
      if (fieldModel.name === 'extensions') {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(this.bitstreamFormat.extensions)) {
          const extenstions = this.bitstreamFormat.extensions;
          const formArray = fieldModel;
          for (let i = 0; i < extenstions.length; i++) {
            formArray.insertGroup(i).group[0] = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
              id: `extension-${i}`,
              value: extenstions[i]
            }, this.arrayInputElementLayout);
          }
        }
      } else {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(this.bitstreamFormat[fieldModel.name])) {
          fieldModel.value = this.bitstreamFormat[fieldModel.name];
        }
      }
    });
  }
  /**
   * Creates an updated bistream format based on the current values in the form
   * Emits the updated bitstream format trouhg the updatedFormat emitter
   */
  onSubmit() {
    const updatedBitstreamFormat = Object.assign(new _core_shared_bitstream_format_model__WEBPACK_IMPORTED_MODULE_1__.BitstreamFormat(), {
      id: this.bitstreamFormat.id
    });
    this.formModel.forEach(fieldModel => {
      if (fieldModel.name === 'extensions') {
        const formArray = fieldModel;
        const extensions = [];
        for (let i = 0; i < formArray.groups.length; i++) {
          const value = formArray.get(i).get(0).value;
          if (!(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(value)) {
            extensions.push(formArray.get(i).get(0).value);
          }
        }
        updatedBitstreamFormat.extensions = extensions;
      } else {
        updatedBitstreamFormat[fieldModel.name] = fieldModel.value;
      }
    });
    this.updatedFormat.emit(updatedBitstreamFormat);
  }
  /**
   * Cancels the edit/create action of the bitstream format and navigates back to the bitstream format registry
   */
  onCancel() {
    this.router.navigate([(0,_admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_5__.getBitstreamFormatsModuleRoute)()]);
  }
  static {
    this.ɵfac = function FormatFormComponent_Factory(t) {
      return new (t || FormatFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FormatFormComponent,
      selectors: [["ds-bitstream-format-form"]],
      inputs: {
        bitstreamFormat: "bitstreamFormat"
      },
      outputs: {
        updatedFormat: "updatedFormat"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "formId", "formModel", "submitForm", "cancel", 4, "ngIf"], [3, "submitForm", "cancel", "formId", "formModel"]],
      template: function FormatFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FormatFormComponent_ds_form_0_Template, 1, 2, "ds-form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-registries_bitstream-formats_bitstream-formats-routes_ts.js.map