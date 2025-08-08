(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_breadcrumbs_i18n-breadcrumb_resolver_ts-src_app_dso-shared_dso-edit-meta-179f34"],{

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

/***/ 38345:
/*!*****************************************************************!*\
  !*** ./src/app/core/data/array-move-change-analyzer.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayMoveChangeAnalyzer: () => (/* binding */ ArrayMoveChangeAnalyzer)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 24616);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * A class to determine move operations between two arrays
 */
class ArrayMoveChangeAnalyzer {
  /**
   * Compare two arrays detecting and returning move operations
   *
   * @param array1  The original array
   * @param array2  The custom array to compare with the original
   */
  diff(array1, array2) {
    return this.getMoves(array1, array2).map(move => Object.assign({
      op: 'move',
      from: '/' + move[0],
      path: '/' + move[1]
    }));
  }
  /**
   * Determine a set of moves required to transform array1 into array2
   * The moves are returned as an array of pairs of numbers where the first number is the original index and the second
   * is the new index
   * It is assumed the operations are executed in the order they're returned (and not simultaneously)
   * @param array1
   * @param array2
   */
  getMoves(array1, array2) {
    const moved = [...array2];
    return array1.reduce((moves, item, index) => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(item) && item !== moved[index]) {
        const last = moved.lastIndexOf(item);
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(moved, last, index);
        moves.unshift([index, last]);
      }
      return moves;
    }, []);
  }
  static {
    this.ɵfac = function ArrayMoveChangeAnalyzer_Factory(t) {
      return new (t || ArrayMoveChangeAnalyzer)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ArrayMoveChangeAnalyzer,
      factory: ArrayMoveChangeAnalyzer.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 15813:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-add-operation.model.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataPatchAddOperation: () => (/* binding */ MetadataPatchAddOperation)
/* harmony export */ });
/* harmony import */ var _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-patch-operation.model */ 38719);

/**
 * Wrapper object for a metadata patch add Operation
 */
class MetadataPatchAddOperation extends _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__.MetadataPatchOperation {
  static {
    this.operationType = 'add';
  }
  constructor(field, value) {
    super(MetadataPatchAddOperation.operationType, field);
    this.value = value;
  }
  /**
   * Transform the MetadataPatchOperation into a fast-json-patch Operation by constructing its path and other properties
   * using the information provided.
   */
  toOperation() {
    return {
      op: this.op,
      path: `/metadata/${this.field}/-`,
      value: this.value
    };
  }
}

/***/ }),

/***/ 51183:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-move-operation.model.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataPatchMoveOperation: () => (/* binding */ MetadataPatchMoveOperation)
/* harmony export */ });
/* harmony import */ var _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-patch-operation.model */ 38719);

/**
 * Wrapper object for a metadata patch move Operation
 */
class MetadataPatchMoveOperation extends _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__.MetadataPatchOperation {
  static {
    this.operationType = 'move';
  }
  constructor(field, from, to) {
    super(MetadataPatchMoveOperation.operationType, field);
    this.from = from;
    this.to = to;
  }
  /**
   * Transform the MetadataPatchOperation into a fast-json-patch Operation by constructing its path and other properties
   * using the information provided.
   */
  toOperation() {
    return {
      op: this.op,
      from: `/metadata/${this.field}/${this.from}`,
      path: `/metadata/${this.field}/${this.to}`
    };
  }
}

/***/ }),

/***/ 38719:
/*!************************************************************************************************************************!*\
  !*** ./src/app/core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-operation.model.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataPatchOperation: () => (/* binding */ MetadataPatchOperation)
/* harmony export */ });
/**
 * Wrapper object for metadata patch Operations
 * It should contain at least the operation type and metadata field. An abstract method to transform this object
 * into a fast-json-patch Operation is defined in each instance extending from this.
 */
class MetadataPatchOperation {
  constructor(op, field) {
    this.op = op;
    this.field = field;
  }
}

/***/ }),

/***/ 89486:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-remove-operation.model.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataPatchRemoveOperation: () => (/* binding */ MetadataPatchRemoveOperation)
/* harmony export */ });
/* harmony import */ var _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-patch-operation.model */ 38719);

/**
 * Wrapper object for a metadata patch remove Operation
 */
class MetadataPatchRemoveOperation extends _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__.MetadataPatchOperation {
  static {
    this.operationType = 'remove';
  }
  constructor(field, place) {
    super(MetadataPatchRemoveOperation.operationType, field);
    this.place = place;
  }
  /**
   * Transform the MetadataPatchOperation into a fast-json-patch Operation by constructing its path and other properties
   * using the information provided.
   */
  toOperation() {
    return {
      op: this.op,
      path: `/metadata/${this.field}/${this.place}`
    };
  }
}

/***/ }),

/***/ 99222:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-replace-operation.model.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataPatchReplaceOperation: () => (/* binding */ MetadataPatchReplaceOperation)
/* harmony export */ });
/* harmony import */ var _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-patch-operation.model */ 38719);

/**
 * Wrapper object for a metadata patch replace Operation
 */
class MetadataPatchReplaceOperation extends _metadata_patch_operation_model__WEBPACK_IMPORTED_MODULE_0__.MetadataPatchOperation {
  static {
    this.operationType = 'replace';
  }
  constructor(field, place, value) {
    super(MetadataPatchReplaceOperation.operationType, field);
    this.place = place;
    this.value = value;
  }
  /**
   * Transform the MetadataPatchOperation into a fast-json-patch Operation by constructing its path and other properties
   * using the information provided.
   */
  toOperation() {
    return {
      op: this.op,
      path: `/metadata/${this.field}/${this.place}`,
      value: this.value
    };
  }
}

/***/ }),

/***/ 24591:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata-field-values/dso-edit-metadata-field-values.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataFieldValuesComponent: () => (/* binding */ DsoEditMetadataFieldValuesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 24616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dso-edit-metadata-form */ 41039);
/* harmony import */ var _dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dso-edit-metadata-value/dso-edit-metadata-value.component */ 80987);
/* harmony import */ var _dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dso-edit-metadata-value-headers/dso-edit-metadata-value-headers.component */ 28043);









function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ds-dso-edit-metadata-value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("edit", function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template_ds_dso_edit_metadata_value_edit_0_listener() {
      const mdValue_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](mdValue_r2.editing = true);
    })("confirm", function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template_ds_dso_edit_metadata_value_confirm_0_listener($event) {
      const mdValue_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      mdValue_r2.confirmChanges($event);
      ctx_r2.form.resetReinstatable();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.valueSaved.emit());
    })("remove", function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template_ds_dso_edit_metadata_value_remove_0_listener() {
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const mdValue_r2 = ctx_r3.$implicit;
      const idx_r5 = ctx_r3.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      mdValue_r2.change === ctx_r2.DsoEditMetadataChangeTypeEnum.ADD ? ctx_r2.form.remove(ctx_r2.mdField, idx_r5) : mdValue_r2.change = ctx_r2.DsoEditMetadataChangeTypeEnum.REMOVE;
      ctx_r2.form.resetReinstatable();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.valueSaved.emit());
    })("undo", function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template_ds_dso_edit_metadata_value_undo_0_listener() {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const mdValue_r2 = ctx_r5.$implicit;
      const idx_r5 = ctx_r5.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      mdValue_r2.change === ctx_r2.DsoEditMetadataChangeTypeEnum.ADD ? ctx_r2.form.remove(ctx_r2.mdField, idx_r5) : mdValue_r2.discard();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.valueSaved.emit());
    })("dragging", function DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template_ds_dso_edit_metadata_value_dragging_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event ? ctx_r2.draggingMdField$.next(ctx_r2.mdField) : ctx_r2.draggingMdField$.next(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdValue_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dso", ctx_r2.dso)("mdValue", mdValue_r2)("mdField", ctx_r2.mdField)("dsoType", ctx_r2.dsoType)("saving$", ctx_r2.saving$)("isOnlyValue", ctx_r2.form.fields[ctx_r2.mdField].length === 1);
  }
}
/**
 * Component displaying table rows for each value for a certain metadata field within a form
 */
class DsoEditMetadataFieldValuesComponent {
  constructor() {
    /**
     * Emit when the value has been saved within the form
     */
    this.valueSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    /**
     * The DsoEditMetadataChangeType enumeration for access in the component's template
     * @type {DsoEditMetadataChangeType}
     */
    this.DsoEditMetadataChangeTypeEnum = _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_1__.DsoEditMetadataChangeType;
  }
  /**
   * Drop a value into a new position
   * Update the form's value array for the current field to match the dropped position
   * Update the values their place property to match the new order
   * Send an update to the parent
   * @param event
   */
  drop(event) {
    const dragIndex = event.previousIndex;
    const dropIndex = event.currentIndex;
    // Move the value within its field
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(this.form.fields[this.mdField], dragIndex, dropIndex);
    // Update all the values in this field their place property
    this.form.fields[this.mdField].forEach((value, index) => {
      value.newValue.place = index;
      value.confirmChanges();
    });
    // Update the form statuses
    this.form.resetReinstatable();
    this.valueSaved.emit();
  }
  static {
    this.ɵfac = function DsoEditMetadataFieldValuesComponent_Factory(t) {
      return new (t || DsoEditMetadataFieldValuesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DsoEditMetadataFieldValuesComponent,
      selectors: [["ds-dso-edit-metadata-field-values"]],
      inputs: {
        dso: "dso",
        form: "form",
        mdField: "mdField",
        dsoType: "dsoType",
        saving$: "saving$",
        draggingMdField$: "draggingMdField$"
      },
      outputs: {
        valueSaved: "valueSaved"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 8,
      consts: [["cdkDropList", "", "role", "table", 1, "flex-grow-1", "ds-drop-list", "h-100", 3, "cdkDropListDropped"], ["role", "presentation", 3, "dsoType"], ["role", "presentation", 3, "dso", "mdValue", "mdField", "dsoType", "saving$", "isOnlyValue", "edit", "confirm", "remove", "undo", "dragging", 4, "ngFor", "ngForOf"], ["role", "presentation", 3, "edit", "confirm", "remove", "undo", "dragging", "dso", "mdValue", "mdField", "dsoType", "saving$", "isOnlyValue"]],
      template: function DsoEditMetadataFieldValuesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function DsoEditMetadataFieldValuesComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.drop($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ds-dso-edit-metadata-value-headers", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DsoEditMetadataFieldValuesComponent_ds_dso_edit_metadata_value_4_Template, 1, 6, "ds-dso-edit-metadata-value", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, ctx.draggingMdField$) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, ctx.draggingMdField$) !== ctx.mdField);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsoType", ctx.dsoType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.form.fields[ctx.mdField]);
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDropList, _dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_3__.DsoEditMetadataValueHeadersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_2__.DsoEditMetadataValueComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.ds-drop-list[_ngcontent-%COMP%] {\n  background-color: var(--bs-gray-500);\n}\n\n.ds-drop-list.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLWZpZWxkLXZhbHVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS1maWVsZC12YWx1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWRyb3AtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktNTAwKTtcbn1cbi5kcy1kcm9wLWxpc3QuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS1maWVsZC12YWx1ZXMvZHNvLWVkaXQtbWV0YWRhdGEtZmllbGQtdmFsdWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQ0Esb3pCQUFvekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWRyb3AtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktNTAwKTtcbn1cbi5kcy1kcm9wLWxpc3QuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41039:
/*!************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata-form.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataChangeType: () => (/* binding */ DsoEditMetadataChangeType),
/* harmony export */   DsoEditMetadataForm: () => (/* binding */ DsoEditMetadataForm),
/* harmony export */   DsoEditMetadataValue: () => (/* binding */ DsoEditMetadataValue)
/* harmony export */ });
/* harmony import */ var _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_add_operation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-add-operation.model */ 15813);
/* harmony import */ var _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_move_operation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-move-operation.model */ 51183);
/* harmony import */ var _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_remove_operation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-remove-operation.model */ 89486);
/* harmony import */ var _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_replace_operation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/object-updates/patch-operation-service/operations/metadata/metadata-patch-replace-operation.model */ 99222);
/* harmony import */ var _core_shared_metadata_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/metadata.models */ 14391);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);






/**
 * Enumeration for the type of change occurring on a metadata value
 */
var DsoEditMetadataChangeType;
(function (DsoEditMetadataChangeType) {
  DsoEditMetadataChangeType[DsoEditMetadataChangeType["UPDATE"] = 1] = "UPDATE";
  DsoEditMetadataChangeType[DsoEditMetadataChangeType["ADD"] = 2] = "ADD";
  DsoEditMetadataChangeType[DsoEditMetadataChangeType["REMOVE"] = 3] = "REMOVE";
})(DsoEditMetadataChangeType || (DsoEditMetadataChangeType = {}));
/**
 * Class holding information about a metadata value and its changes within an edit form
 */
class DsoEditMetadataValue {
  constructor(value, added = false) {
    /**
     * Whether or not this value is currently being edited or not
     */
    this.editing = false;
    /**
     * A flag to keep track if the value has been reordered (place has changed)
     */
    this.reordered = false;
    this.originalValue = value;
    this.newValue = Object.assign(new _core_shared_metadata_models__WEBPACK_IMPORTED_MODULE_4__.MetadataValue(), value);
    if (added) {
      this.change = DsoEditMetadataChangeType.ADD;
      this.editing = true;
    }
  }
  /**
   * Save the current changes made to the metadata value
   * This will set the type of change to UPDATE if the new metadata value's value and/or language are different from
   * the original value
   * It will also set the editing flag to false
   */
  confirmChanges(finishEditing = false) {
    this.reordered = this.originalValue.place !== this.newValue.place;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasNoValue)(this.change) || this.change === DsoEditMetadataChangeType.UPDATE) {
      if (this.originalValue.value !== this.newValue.value || this.originalValue.language !== this.newValue.language || this.originalValue.authority !== this.newValue.authority || this.originalValue.confidence !== this.newValue.confidence) {
        this.change = DsoEditMetadataChangeType.UPDATE;
      } else {
        this.change = undefined;
      }
    }
    if (finishEditing) {
      this.editing = false;
    }
  }
  /**
   * Returns if the current value contains changes or not
   * If the metadata value contains changes, but they haven't been confirmed yet through confirmChanges(), this might
   * return false (which is desired)
   */
  hasChanges() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.change) || this.reordered;
  }
  /**
   * Discard the current changes and mark the value and change type re-instatable by storing them in their relevant
   * properties
   */
  discardAndMarkReinstatable() {
    if (this.change === DsoEditMetadataChangeType.UPDATE || this.reordered) {
      this.reinstatableValue = this.newValue;
    }
    this.reinstatableChange = this.change;
    this.discard(false);
  }
  /**
   * Discard the current changes
   * Call discardAndMarkReinstatable() instead, if the discard should be re-instatable
   */
  discard(keepPlace = true) {
    this.change = undefined;
    const place = this.newValue.place;
    this.newValue = Object.assign(new _core_shared_metadata_models__WEBPACK_IMPORTED_MODULE_4__.MetadataValue(), this.originalValue);
    if (keepPlace) {
      this.newValue.place = place;
    }
    this.confirmChanges(true);
  }
  /**
   * Re-instate (undo) the last discard by replacing the value and change type with their reinstate properties (if present)
   */
  reinstate() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.reinstatableValue)) {
      this.newValue = this.reinstatableValue;
      this.reinstatableValue = undefined;
    }
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.reinstatableChange)) {
      this.change = this.reinstatableChange;
      this.reinstatableChange = undefined;
    }
    this.confirmChanges();
  }
  /**
   * Returns if either the value or change type have a re-instatable property
   * This will be the case if a discard has taken place that undid changes to the value or type
   */
  isReinstatable() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.reinstatableValue) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.reinstatableChange);
  }
  /**
   * Reset the state of the re-instatable properties
   */
  resetReinstatable() {
    this.reinstatableValue = undefined;
    this.reinstatableChange = undefined;
  }
}
/**
 * Class holding information about the metadata of a DSpaceObject and its changes within an edit form
 */
class DsoEditMetadataForm {
  constructor(metadata) {
    this.originalFieldKeys = [];
    this.fieldKeys = [];
    this.fields = {};
    this.reinstatableNewValues = {};
    Object.entries(metadata).forEach(([mdField, values]) => {
      this.originalFieldKeys.push(mdField);
      this.fieldKeys.push(mdField);
      this.setValuesForFieldSorted(mdField, values.map(value => new DsoEditMetadataValue(value)));
    });
    this.sortFieldKeys();
  }
  /**
   * Add a new temporary value for the user to edit
   */
  add() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasNoValue)(this.newValue)) {
      this.newValue = new DsoEditMetadataValue(new _core_shared_metadata_models__WEBPACK_IMPORTED_MODULE_4__.MetadataValue(), true);
    }
  }
  /**
   * Add the temporary value to a metadata field
   * Clear the temporary value afterwards
   * @param mdField
   */
  setMetadataField(mdField) {
    this.newValue.editing = false;
    this.addValueToField(this.newValue, mdField);
    // Set the place property to match the new value's position within its field
    const place = this.fields[mdField].length - 1;
    this.fields[mdField][place].originalValue.place = place;
    this.fields[mdField][place].newValue.place = place;
    this.newValue = undefined;
  }
  /**
   * Add a value to a metadata field within the map
   * @param value
   * @param mdField
   * @private
   */
  addValueToField(value, mdField) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(this.fields[mdField])) {
      this.fieldKeys.push(mdField);
      this.sortFieldKeys();
      this.fields[mdField] = [];
    }
    this.fields[mdField].push(value);
  }
  /**
   * Remove a value from a metadata field on a given index (this actually removes the value, not just marking it deleted)
   * @param mdField
   * @param index
   */
  remove(mdField, index) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(this.fields[mdField])) {
      this.fields[mdField].splice(index, 1);
      if (this.fields[mdField].length === 0) {
        this.fieldKeys.splice(this.fieldKeys.indexOf(mdField), 1);
        delete this.fields[mdField];
      }
    }
  }
  /**
   * Returns if at least one value within the form contains a change
   */
  hasChanges() {
    return Object.values(this.fields).some(values => values.some(value => value.hasChanges()));
  }
  /**
   * Check if a metadata field contains changes within its order (place property of values)
   * @param mdField
   */
  hasOrderChanges(mdField) {
    return this.fields[mdField].some(value => value.originalValue.place !== value.newValue.place);
  }
  /**
   * Discard all changes within the form and store their current values within re-instatable properties so they can be
   * undone afterwards
   */
  discard() {
    this.resetReinstatable();
    // Discard changes from each value from each field
    Object.entries(this.fields).forEach(([field, values]) => {
      let removeFromIndex = -1;
      values.forEach((value, index) => {
        if (value.change === DsoEditMetadataChangeType.ADD) {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(this.reinstatableNewValues[field])) {
            this.reinstatableNewValues[field] = [];
          }
          this.reinstatableNewValues[field].push(value);
          if (removeFromIndex === -1) {
            removeFromIndex = index;
          }
        } else {
          value.discardAndMarkReinstatable();
        }
      });
      if (removeFromIndex > -1) {
        this.fields[field].splice(removeFromIndex, this.fields[field].length - removeFromIndex);
      }
    });
    // Delete new metadata fields
    this.fieldKeys.forEach(field => {
      if (this.originalFieldKeys.indexOf(field) < 0) {
        delete this.fields[field];
      }
    });
    this.fieldKeys = [...this.originalFieldKeys];
    this.sortFieldKeys();
    // Reset the order of values within their fields to match their place property
    this.fieldKeys.forEach(field => {
      this.setValuesForFieldSorted(field, this.fields[field]);
    });
  }
  /**
   * Reset the order of values within a metadata field to their original places
   * Update the actual array to match the place properties
   * @param mdField
   */
  resetOrder(mdField) {
    this.fields[mdField].forEach(value => {
      value.newValue.place = value.originalValue.place;
      value.confirmChanges();
    });
    this.setValuesForFieldSorted(mdField, this.fields[mdField]);
  }
  /**
   * Sort fieldKeys alphabetically
   * Should be called whenever a field is added to ensure the alphabetical order is kept
   */
  sortFieldKeys() {
    this.fieldKeys.sort((a, b) => a.localeCompare(b));
  }
  /**
   * Undo any previously discarded changes
   */
  reinstate() {
    // Reinstate each value
    Object.values(this.fields).forEach(values => {
      values.forEach(value => {
        value.reinstate();
      });
    });
    // Re-add new values
    Object.entries(this.reinstatableNewValues).forEach(([field, values]) => {
      values.forEach(value => {
        this.addValueToField(value, field);
      });
    });
    // Reset the order of values within their fields to match their place property
    this.fieldKeys.forEach(field => {
      this.setValuesForFieldSorted(field, this.fields[field]);
    });
    this.reinstatableNewValues = {};
  }
  /**
   * Returns if at least one value contains a re-instatable property, meaning a discard can be reversed
   */
  isReinstatable() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(this.reinstatableNewValues) || Object.values(this.fields).some(values => values.some(value => value.isReinstatable()));
  }
  /**
   * Reset the state of the re-instatable properties and values
   */
  resetReinstatable() {
    this.reinstatableNewValues = {};
    Object.values(this.fields).forEach(values => {
      values.forEach(value => {
        value.resetReinstatable();
      });
    });
  }
  /**
   * Set the values of a metadata field and sort them by their newValue's place property
   * @param mdField
   * @param values
   */
  setValuesForFieldSorted(mdField, values) {
    this.fields[mdField] = values.sort((a, b) => a.newValue.place - b.newValue.place);
  }
  /**
   * Get the json PATCH operations for the current changes within this form
   * For each metadata field, it'll return operations in the following order: replace, remove (from last to first place), add and move
   * This order is important, as each operation is executed in succession of the previous one
   */
  getOperations(moveAnalyser) {
    const operations = [];
    Object.entries(this.fields).forEach(([field, values]) => {
      const replaceOperations = [];
      const removeOperations = [];
      const addOperations = [];
      [...values].sort((a, b) => a.originalValue.place - b.originalValue.place).forEach(value => {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(value.change)) {
          if (value.change === DsoEditMetadataChangeType.UPDATE) {
            // Only changes to value or language are considered "replace" operations. Changes to place are considered "move", which is processed below.
            if (value.originalValue.value !== value.newValue.value || value.originalValue.language !== value.newValue.language || value.originalValue.authority !== value.newValue.authority || value.originalValue.confidence !== value.newValue.confidence) {
              replaceOperations.push(new _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_replace_operation_model__WEBPACK_IMPORTED_MODULE_3__.MetadataPatchReplaceOperation(field, value.originalValue.place, {
                value: value.newValue.value,
                language: value.newValue.language,
                authority: value.newValue.authority,
                confidence: value.newValue.confidence
              }));
            }
          } else if (value.change === DsoEditMetadataChangeType.REMOVE) {
            removeOperations.push(new _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_remove_operation_model__WEBPACK_IMPORTED_MODULE_2__.MetadataPatchRemoveOperation(field, value.originalValue.place));
          } else if (value.change === DsoEditMetadataChangeType.ADD) {
            addOperations.push(new _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_add_operation_model__WEBPACK_IMPORTED_MODULE_0__.MetadataPatchAddOperation(field, {
              value: value.newValue.value,
              language: value.newValue.language,
              authority: value.newValue.authority,
              confidence: value.newValue.confidence
            }));
          } else {
            console.warn('Illegal metadata change state detected for', value);
          }
        }
      });
      operations.push(...replaceOperations.map(operation => operation.toOperation()));
      operations.push(...removeOperations
      // Sort remove operations backwards first, because they get executed in order. This avoids one removal affecting the next.
      .sort((a, b) => b.place - a.place).map(operation => operation.toOperation()));
      operations.push(...addOperations.map(operation => operation.toOperation()));
    });
    // Calculate and add the move operations that need to happen in order to move value from their old place to their new within the field
    // This uses an ArrayMoveChangeAnalyzer
    Object.entries(this.fields).forEach(([field, values]) => {
      // Exclude values marked for removal, because operations are executed in order (remove first, then move)
      const valuesWithoutRemoved = values.filter(value => value.change !== DsoEditMetadataChangeType.REMOVE);
      const moveOperations = moveAnalyser.diff([...valuesWithoutRemoved].sort((a, b) => a.originalValue.place - b.originalValue.place).map(value => value.originalValue.place), [...valuesWithoutRemoved].sort((a, b) => a.newValue.place - b.newValue.place).map(value => value.originalValue.place)).map(operation => new _core_data_object_updates_patch_operation_service_operations_metadata_metadata_patch_move_operation_model__WEBPACK_IMPORTED_MODULE_1__.MetadataPatchMoveOperation(field, +operation.from.substr(1), +operation.path.substr(1)).toOperation());
      operations.push(...moveOperations);
    });
    return operations;
  }
}

/***/ }),

/***/ 40659:
/*!***************************************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata-headers/dso-edit-metadata-headers.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataHeadersComponent: () => (/* binding */ DsoEditMetadataHeadersComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component displaying the header table row for DSO edit metadata page
 */
class DsoEditMetadataHeadersComponent {
  static {
    this.ɵfac = function DsoEditMetadataHeadersComponent_Factory(t) {
      return new (t || DsoEditMetadataHeadersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DsoEditMetadataHeadersComponent,
      selectors: [["ds-dso-edit-metadata-headers"]],
      inputs: {
        dsoType: "dsoType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 12,
      consts: [[1, "d-flex", "flex-row", "ds-field-row", "ds-header-row"], [1, "lbl-cell"], [1, "flex-grow-1"], [1, "d-flex", "flex-row"], [1, "flex-grow-1", "ds-flex-cell", "ds-value-cell"], [1, "dont-break-out", "preserve-line-breaks"], [1, "ds-flex-cell", "ds-lang-cell"], [1, "text-center", "ds-flex-cell", "ds-edit-cell"]],
      template: function DsoEditMetadataHeadersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "b", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.dsoType + ".edit.metadata.headers.field"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx.dsoType + ".edit.metadata.headers.value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.dsoType + ".edit.metadata.headers.language"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, ctx.dsoType + ".edit.metadata.headers.edit"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.lbl-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-field-width);\n  max-width: var(--ds-dso-edit-field-width);\n  background-color: var(--bs-gray-100);\n  font-weight: bold;\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.ds-header-row[_ngcontent-%COMP%] {\n  background-color: var(--bs-gray-100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLWhlYWRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQ0FBQTtBQUVGIiwiZmlsZSI6ImRzby1lZGl0LW1ldGFkYXRhLWhlYWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxibC1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtZmllbGQtd2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LTEwMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTIwMCk7XG59XG4uZHMtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS1oZWFkZXJzL2Rzby1lZGl0LW1ldGFkYXRhLWhlYWRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQ0FBQTtBQUVGO0FBQ0Esd21DQUF3bUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxibC1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtZmllbGQtd2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LTEwMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTIwMCk7XG59XG4uZHMtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "\n\n\n\n\n\n\n\n\n\n\n\n.ds-field-row[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-gray-400);\n}\n\n.ds-flex-cell[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.ds-lang-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-lang-width);\n  max-width: var(--ds-dso-edit-lang-width);\n}\n\n.ds-edit-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-actions-width);\n}\n\n.ds-value-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.ds-value-row[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%] {\n  background-color: var(--ds-warning-bg);\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-warning);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%] {\n  background-color: var(--ds-danger-bg);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-danger);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLWNlbGxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFBQTtFQUNFLHdDQUFBO0VBQ0Esd0NBQUE7QUFHRjs7QUFEQTtFQUNFLDJDQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLHNDQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQ0FBQTtBQVFGOztBQU5BO0VBQ0UscUNBQUE7QUFTRjs7QUFQQTtFQUNFLGtDQUFBO0FBVUY7O0FBUkE7RUFDRSxzQ0FBQTtBQVdGOztBQVRBO0VBQ0UsbUNBQUE7QUFZRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS1jZWxscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1maWVsZC1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTQwMCk7XG59XG4uZHMtZmxleC1jZWxsIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtZ3JheS0yMDApO1xufVxuLmRzLWxhbmctY2VsbCB7XG4gIG1pbi13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG59XG4uZHMtZWRpdC1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1hY3Rpb25zLXdpZHRoKTtcbn1cbi5kcy12YWx1ZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kcy12YWx1ZS1yb3c6YWN0aXZlIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbi5kcy12YWx1ZS1yb3cuZHMtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLXdhcm5pbmctYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy13YXJuaW5nKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFuZ2VyLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1kYW5nZXIpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3MgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS1zaGFyZWQvZHNvLWVkaXQtbWV0YWRhdGEtY2VsbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0Usd0NBQUE7RUFDQSx3Q0FBQTtBQUdGOztBQURBO0VBQ0UsMkNBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usc0NBQUE7QUFPRjs7QUFMQTtFQUNFLG1DQUFBO0FBUUY7O0FBTkE7RUFDRSxxQ0FBQTtBQVNGOztBQVBBO0VBQ0Usa0NBQUE7QUFVRjs7QUFSQTtFQUNFLHNDQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQ0FBQTtBQVlGO0FBQ0EsNGxFQUE0bEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5kcy1mbGV4LWNlbGwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTIwMCk7XG59XG4uZHMtbGFuZy1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbn1cbi5kcy1lZGl0LWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWFjdGlvbnMtd2lkdGgpO1xufVxuLmRzLXZhbHVlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRzLXZhbHVlLXJvdzphY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtd2FybmluZy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXdhcm5pbmcgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXdhcm5pbmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYW5nZXItYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWRhbmdlcik7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1zdWNjZXNzLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtc3VjY2VzcyAuZHMtZmxleC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtc3VjY2Vzcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 28043:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata-value-headers/dso-edit-metadata-value-headers.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataValueHeadersComponent: () => (/* binding */ DsoEditMetadataValueHeadersComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component displaying invisible headers for a list of metadata values using table roles for accessibility
 */
class DsoEditMetadataValueHeadersComponent {
  static {
    this.ɵfac = function DsoEditMetadataValueHeadersComponent_Factory(t) {
      return new (t || DsoEditMetadataValueHeadersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DsoEditMetadataValueHeadersComponent,
      selectors: [["ds-dso-edit-metadata-value-headers"]],
      inputs: {
        dsoType: "dsoType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 9,
      consts: [["role", "row", 1, "visually-hidden"], ["role", "columnheader"]],
      template: function DsoEditMetadataValueHeadersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.dsoType + ".edit.metadata.headers.value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.dsoType + ".edit.metadata.headers.language"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.dsoType + ".edit.metadata.headers.edit"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLXZhbHVlLWhlYWRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZHNvLWVkaXQtbWV0YWRhdGEtdmFsdWUtaGVhZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS12YWx1ZS1oZWFkZXJzL2Rzby1lZGl0LW1ldGFkYXRhLXZhbHVlLWhlYWRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbkJBQWduQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */", "\n\n\n\n\n\n\n\n\n\n\n\n.ds-field-row[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-gray-400);\n}\n\n.ds-flex-cell[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.ds-lang-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-lang-width);\n  max-width: var(--ds-dso-edit-lang-width);\n}\n\n.ds-edit-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-actions-width);\n}\n\n.ds-value-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.ds-value-row[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%] {\n  background-color: var(--ds-warning-bg);\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-warning);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%] {\n  background-color: var(--ds-danger-bg);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-danger);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLWNlbGxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFBQTtFQUNFLHdDQUFBO0VBQ0Esd0NBQUE7QUFHRjs7QUFEQTtFQUNFLDJDQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLHNDQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQ0FBQTtBQVFGOztBQU5BO0VBQ0UscUNBQUE7QUFTRjs7QUFQQTtFQUNFLGtDQUFBO0FBVUY7O0FBUkE7RUFDRSxzQ0FBQTtBQVdGOztBQVRBO0VBQ0UsbUNBQUE7QUFZRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS1jZWxscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1maWVsZC1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTQwMCk7XG59XG4uZHMtZmxleC1jZWxsIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtZ3JheS0yMDApO1xufVxuLmRzLWxhbmctY2VsbCB7XG4gIG1pbi13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG59XG4uZHMtZWRpdC1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1hY3Rpb25zLXdpZHRoKTtcbn1cbi5kcy12YWx1ZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kcy12YWx1ZS1yb3c6YWN0aXZlIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbi5kcy12YWx1ZS1yb3cuZHMtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLXdhcm5pbmctYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy13YXJuaW5nKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFuZ2VyLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1kYW5nZXIpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3MgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS1zaGFyZWQvZHNvLWVkaXQtbWV0YWRhdGEtY2VsbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0Usd0NBQUE7RUFDQSx3Q0FBQTtBQUdGOztBQURBO0VBQ0UsMkNBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usc0NBQUE7QUFPRjs7QUFMQTtFQUNFLG1DQUFBO0FBUUY7O0FBTkE7RUFDRSxxQ0FBQTtBQVNGOztBQVBBO0VBQ0Usa0NBQUE7QUFVRjs7QUFSQTtFQUNFLHNDQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQ0FBQTtBQVlGO0FBQ0EsNGxFQUE0bEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5kcy1mbGV4LWNlbGwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTIwMCk7XG59XG4uZHMtbGFuZy1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbn1cbi5kcy1lZGl0LWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWFjdGlvbnMtd2lkdGgpO1xufVxuLmRzLXZhbHVlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRzLXZhbHVlLXJvdzphY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtd2FybmluZy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXdhcm5pbmcgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXdhcm5pbmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYW5nZXItYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWRhbmdlcik7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1zdWNjZXNzLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtc3VjY2VzcyAuZHMtZmxleC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtc3VjY2Vzcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80987:
/*!***********************************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata-value/dso-edit-metadata-value.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataValueComponent: () => (/* binding */ DsoEditMetadataValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 24616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var src_app_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/registry/registry.service */ 67558);
/* harmony import */ var src_app_core_submission_vocabularies_vocabulary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/submission/vocabularies/vocabulary.service */ 81677);
/* harmony import */ var src_app_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notifications/notifications.service */ 69472);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/relationship-data.service */ 48833);
/* harmony import */ var _core_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/metadata/metadata.service */ 5410);
/* harmony import */ var _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/confidence-type */ 98179);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _core_shared_metadata_representation_metadata_representation_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/shared/metadata-representation/metadata-representation.model */ 85448);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_onebox_dynamic_onebox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/form/builder/ds-dynamic-form-ui/models/onebox/dynamic-onebox.component */ 18302);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_onebox_dynamic_onebox_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/form/builder/ds-dynamic-form-ui/models/onebox/dynamic-onebox.model */ 45500);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/form/builder/ds-dynamic-form-ui/models/scrollable-dropdown/dynamic-scrollable-dropdown.component */ 83766);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/form/builder/ds-dynamic-form-ui/models/scrollable-dropdown/dynamic-scrollable-dropdown.model */ 11220);
/* harmony import */ var _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-metadata-value.model */ 61280);
/* harmony import */ var _shared_form_directives_authority_confidence_state_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/form/directives/authority-confidence-state.directive */ 39729);
/* harmony import */ var _shared_object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/object-collection/shared/badges/type-badge/themed-type-badge.component */ 74448);
/* harmony import */ var _shared_utils_debounce_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/utils/debounce.directive */ 56386);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dso-edit-metadata-form */ 41039);













































const _c0 = (a0, a1, a2, a3) => ({
  "ds-warning": a0,
  "ds-danger": a1,
  "ds-success": a2,
  "h-100": a3
});
const _c1 = a0 => ({
  "disabled": a0
});
function DsoEditMetadataValueComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.mdValue.newValue.value);
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_textarea_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function DsoEditMetadataValueComponent_div_0_div_1_textarea_2_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx_r1.mdValue.newValue.value, $event) || (ctx_r1.mdValue.newValue.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("onDebounce", function DsoEditMetadataValueComponent_div_0_div_1_textarea_2_Template_textarea_onDebounce_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.confirm.emit(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.mdValue.newValue.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dsDebounce", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 3, ctx_r1.dsoType + ".edit.metadata.edit.value"));
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_scrollable_dropdown_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "ds-dynamic-scrollable-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_scrollable_dropdown_5_Template_ds_dynamic_scrollable_dropdown_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChangeAuthorityField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("bindId", ctx_r1.mdField)("group", ctx_r1.group)("model", ctx_r1.getModel());
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_onebox_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "ds-dynamic-onebox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_onebox_7_Template_ds_dynamic_onebox_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChangeAuthorityField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("group", ctx_r1.group)("model", ctx_r1.getModel());
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_div_1_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.toggleFreeTextEdition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", ctx_r1.enabledFreeTextEditing ? ctx_r1.dsoType + ".edit.metadata.edit.buttons.disable-free-text-editing" : _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 3, ctx_r1.dsoType + ".edit.metadata.edit.buttons.enable-free-text-editing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", ctx_r1.enabledFreeTextEditing ? "fa-lock" : "fa-unlock");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 5, ctx_r1.enabledFreeTextEditing ? ctx_r1.dsoType + ".edit.metadata.edit.buttons.disable-free-text-editing" : ctx_r1.dsoType + ".edit.metadata.edit.buttons.enable-free-text-editing"), " ");
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("authorityValue", ctx_r1.mdValue.newValue)("iconMode", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 4, ctx_r1.dsoType + ".edit.metadata.authority.label"), " ", ctx_r1.mdValue.newValue.authority, " ");
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_div_14_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_div_1_div_14_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChangeEditingAuthorityStatus(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 2, ctx_r1.dsoType + ".edit.metadata.edit.buttons.open-authority-edition"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 4, ctx_r1.dsoType + ".edit.metadata.edit.buttons.open-authority-edition"));
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_div_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_div_1_div_14_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChangeEditingAuthorityStatus(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 2, ctx_r1.dsoType + ".edit.metadata.edit.buttons.close-authority-edition"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 4, ctx_r1.dsoType + ".edit.metadata.edit.buttons.close-authority-edition"));
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function DsoEditMetadataValueComponent_div_0_div_1_div_14_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx_r1.mdValue.newValue.authority, $event) || (ctx_r1.mdValue.newValue.authority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function DsoEditMetadataValueComponent_div_0_div_1_div_14_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChangeAuthorityKey());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, DsoEditMetadataValueComponent_div_0_div_1_div_14_button_5_Template, 4, 6, "button", 37)(6, DsoEditMetadataValueComponent_div_0_div_1_div_14_button_6_Template, 4, 6, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("authorityValue", ctx_r1.mdValue.newValue.confidence)("iconMode", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.mdValue.newValue.authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("disabled", !ctx_r1.editingAuthority);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 7, ctx_r1.dsoType + ".edit.metadata.edit.authority.key"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.editingAuthority);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.editingAuthority);
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 43)(1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "ds-type-badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdRepresentation_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 3, ctx_r1.mdRepresentationItemRoute$));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 5, ctx_r1.mdRepresentationName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("object", mdRepresentation_r10);
  }
}
function DsoEditMetadataValueComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, DsoEditMetadataValueComponent_div_0_div_1_div_1_Template, 2, 1, "div", 4)(2, DsoEditMetadataValueComponent_div_0_div_1_textarea_2_Template, 2, 5, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_scrollable_dropdown_5_Template, 1, 3, "ds-dynamic-scrollable-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, DsoEditMetadataValueComponent_div_0_div_1_ds_dynamic_onebox_7_Template, 1, 2, "ds-dynamic-onebox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, DsoEditMetadataValueComponent_div_0_div_1_button_10_Template, 5, 7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, DsoEditMetadataValueComponent_div_0_div_1_div_13_Template, 5, 6, "div", 22)(14, DsoEditMetadataValueComponent_div_0_div_1_div_14_Template, 7, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](17, DsoEditMetadataValueComponent_div_0_div_1_div_17_Template, 6, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdRepresentation_r10 = ctx.ngVar;
    const isVirtual_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.mdValue.editing && !mdRepresentation_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing && !mdRepresentation_r10 && (_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 8, ctx_r1.isAuthorityControlled()) !== true || ctx_r1.enabledFreeTextEditing && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 10, ctx_r1.isSuggesterVocabulary()) !== true));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](6, 12, ctx_r1.isScrollableVocabulary()) && !ctx_r1.enabledFreeTextEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing && (_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](8, 14, ctx_r1.isHierarchicalVocabulary()) && !ctx_r1.enabledFreeTextEditing || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](9, 16, ctx_r1.isSuggesterVocabulary())));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing && (_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](11, 18, ctx_r1.isScrollableVocabulary()) || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](12, 20, ctx_r1.isHierarchicalVocabulary())));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !isVirtual_r11 && !ctx_r1.mdValue.editing && ctx_r1.mdValue.newValue.authority && ctx_r1.mdValue.newValue.confidence !== ctx_r1.ConfidenceTypeEnum.CF_UNSET && ctx_r1.mdValue.newValue.confidence !== ctx_r1.ConfidenceTypeEnum.CF_NOVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](15, 22, ctx_r1.isAuthorityControlled()) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](16, 24, ctx_r1.isSuggesterVocabulary()));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", mdRepresentation_r10);
  }
}
function DsoEditMetadataValueComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.mdValue.newValue.language);
  }
}
function DsoEditMetadataValueComponent_div_0_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function DsoEditMetadataValueComponent_div_0_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx_r1.mdValue.newValue.language, $event) || (ctx_r1.mdValue.newValue.language = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("onDebounce", function DsoEditMetadataValueComponent_div_0_input_5_Template_input_onDebounce_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.confirm.emit(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.mdValue.newValue.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dsDebounce", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 3, ctx_r1.dsoType + ".edit.metadata.edit.language"));
  }
}
function DsoEditMetadataValueComponent_div_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.edit.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isVirtual_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 3, ctx_r1.dsoType + ".edit.metadata.edit.buttons.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 5, ctx_r1.dsoType + ".edit.metadata.edit.buttons.edit"))("dsBtnDisabled", isVirtual_r11 || ctx_r1.mdValue.change === ctx_r1.DsoEditMetadataChangeTypeEnum.REMOVE || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 7, ctx_r1.saving$));
  }
}
function DsoEditMetadataValueComponent_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.confirm.emit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isVirtual_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 3, ctx_r1.dsoType + ".edit.metadata.edit.buttons.confirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 5, ctx_r1.dsoType + ".edit.metadata.edit.buttons.confirm"))("dsBtnDisabled", isVirtual_r11 || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 7, ctx_r1.saving$));
  }
}
function DsoEditMetadataValueComponent_div_0_button_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const disabled_r15 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 5, ctx_r1.dsoType + ".edit.metadata.edit.buttons.drag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("cdkDragHandleDisabled", disabled_r15)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](9, _c1, disabled_r15))("dsBtnDisabled", disabled_r15)("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 7, ctx_r1.dsoType + ".edit.metadata.edit.buttons.drag"));
  }
}
function DsoEditMetadataValueComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("cdkDragStarted", function DsoEditMetadataValueComponent_div_0_Template_div_cdkDragStarted_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.dragging.emit(true));
    })("cdkDragEnded", function DsoEditMetadataValueComponent_div_0_Template_div_cdkDragEnded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.dragging.emit(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, DsoEditMetadataValueComponent_div_0_div_1_Template, 18, 26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, DsoEditMetadataValueComponent_div_0_div_4_Template, 2, 1, "div", 4)(5, DsoEditMetadataValueComponent_div_0_input_5_Template, 2, 5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](11, DsoEditMetadataValueComponent_div_0_button_11_Template, 5, 9, "button", 10)(12, DsoEditMetadataValueComponent_div_0_button_12_Template, 5, 9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.remove.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](17, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DsoEditMetadataValueComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.undo.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](22, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](23, DsoEditMetadataValueComponent_div_0_button_23_Template, 4, 11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const isVirtual_r11 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction4"](32, _c0, ctx_r1.mdValue.reordered || ctx_r1.mdValue.change === ctx_r1.DsoEditMetadataChangeTypeEnum.UPDATE, ctx_r1.mdValue.change === ctx_r1.DsoEditMetadataChangeTypeEnum.REMOVE, ctx_r1.mdValue.change === ctx_r1.DsoEditMetadataChangeTypeEnum.ADD, ctx_r1.isOnlyValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 14, ctx_r1.mdRepresentation$));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.mdValue.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngbTooltip", isVirtual_r11 ? _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](10, 16, ctx_r1.dsoType + ".edit.metadata.edit.buttons.virtual") : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.mdValue.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.mdValue.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](14, 18, ctx_r1.dsoType + ".edit.metadata.edit.buttons.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](15, 20, ctx_r1.dsoType + ".edit.metadata.edit.buttons.remove"))("dsBtnDisabled", isVirtual_r11 || ctx_r1.mdValue.change && ctx_r1.mdValue.change !== ctx_r1.DsoEditMetadataChangeTypeEnum.ADD || ctx_r1.mdValue.editing || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](16, 22, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](19, 24, ctx_r1.dsoType + ".edit.metadata.edit.buttons.undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](20, 26, ctx_r1.dsoType + ".edit.metadata.edit.buttons.undo"))("dsBtnDisabled", isVirtual_r11 || !ctx_r1.mdValue.change && ctx_r1.mdValue.reordered || !ctx_r1.mdValue.change && !ctx_r1.mdValue.editing || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](21, 28, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngVar", ctx_r1.isOnlyValue || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](24, 30, ctx_r1.saving$));
  }
}
/**
 * Component displaying a single editable row for a metadata value
 */
class DsoEditMetadataValueComponent {
  constructor(relationshipService, dsoNameService, vocabularyService, itemService, cdr, registryService, notificationsService, translate, metadataService) {
    this.relationshipService = relationshipService;
    this.dsoNameService = dsoNameService;
    this.vocabularyService = vocabularyService;
    this.itemService = itemService;
    this.cdr = cdr;
    this.registryService = registryService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.metadataService = metadataService;
    /**
     * Is this value the only one within its list?
     * Will disable certain functionality like dragging (because dragging within a list of 1 is pointless)
     */
    this.isOnlyValue = false;
    /**
     * Emits when the user clicked edit
     */
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * Emits when the user clicked confirm
     */
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * Emits when the user clicked remove
     */
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * Emits when the user clicked undo
     */
    this.undo = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * Emits true when the user starts dragging a value, false when the user stops dragging
     */
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * The DsoEditMetadataChangeType enumeration for access in the component's template
     * @type {DsoEditMetadataChangeType}
     */
    this.DsoEditMetadataChangeTypeEnum = _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_24__.DsoEditMetadataChangeType;
    /**
     * The ConfidenceType enumeration for access in the component's template
     * @type {ConfidenceType}
     */
    this.ConfidenceTypeEnum = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType;
    /**
     * Whether or not the authority field is currently being edited
     */
    this.editingAuthority = false;
    /**
     * Whether or not the free-text editing is enabled when scrollable dropdown or hierarchical vocabulary is used
     */
    this.enabledFreeTextEditing = false;
    /**
     * Field group used by authority field
     * @type {UntypedFormGroup}
     */
    this.group = new _angular_forms__WEBPACK_IMPORTED_MODULE_26__.UntypedFormGroup({
      authorityField: new _angular_forms__WEBPACK_IMPORTED_MODULE_26__.UntypedFormControl()
    });
    /**
     * Model to use for editing authorities values
     */
    this.model$ = new rxjs__WEBPACK_IMPORTED_MODULE_27__.BehaviorSubject(null);
  }
  ngOnInit() {
    this.initVirtualProperties();
    this.initAuthorityProperties();
  }
  /**
   * Initialise potential properties of a virtual metadata value
   */
  initVirtualProperties() {
    this.mdRepresentation$ = this.metadataService.isVirtual(this.mdValue.newValue) ? this.relationshipService.resolveMetadataRepresentation(this.mdValue.newValue, this.dso, 'Item').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(mdRepresentation => mdRepresentation.representationType === _core_shared_metadata_representation_metadata_representation_model__WEBPACK_IMPORTED_MODULE_9__.MetadataRepresentationType.Item ? mdRepresentation : null)) : rxjs__WEBPACK_IMPORTED_MODULE_29__.EMPTY;
    this.mdRepresentationItemRoute$ = this.mdRepresentation$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(mdRepresentation => mdRepresentation ? (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__.getItemPageRoute)(mdRepresentation) : null));
    this.mdRepresentationName$ = this.mdRepresentation$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(mdRepresentation => mdRepresentation ? this.dsoNameService.getName(mdRepresentation) : null));
  }
  /**
   * Initialise potential properties of a authority controlled metadata field
   */
  initAuthorityProperties() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(this.mdField)) {
      const owningCollection$ = this.itemService.findByHref(this.dso._links.self.href, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_22__.followLink)('owningCollection')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(item => item.owningCollection), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)());
      this.vocabulary$ = owningCollection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(c => this.vocabularyService.getVocabularyByMetadataAndCollection(this.mdField, c.uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteDataPayload)())));
    } else {
      this.vocabulary$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(undefined);
    }
    this.isAuthorityControlled$ = this.vocabulary$.pipe(
    // Create the model used by the authority fields to ensure its existence when the field is initialized
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.tap)(v => this.model$.next(this.createModel(v))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(result => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(result)));
    this.isHierarchicalVocabulary$ = this.vocabulary$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(result => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(result) && result.hierarchical));
    this.isScrollableVocabulary$ = this.vocabulary$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(result => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(result) && result.scrollable));
    this.isSuggesterVocabulary$ = this.vocabulary$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(result => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(result) && !result.hierarchical && !result.scrollable));
  }
  /**
   * Returns a {@link DynamicOneboxModel} or {@link DynamicScrollableDropdownModel} model based on the
   * vocabulary used.
   */
  createModel(vocabulary) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(vocabulary)) {
      let formFieldValue;
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(this.mdValue.newValue.value)) {
        formFieldValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_18__.FormFieldMetadataValueObject();
        formFieldValue.value = this.mdValue.newValue.value;
        formFieldValue.display = this.mdValue.newValue.value;
        if (this.mdValue.newValue.authority) {
          formFieldValue.authority = this.mdValue.newValue.authority;
          formFieldValue.confidence = this.mdValue.newValue.confidence;
        }
      } else {
        formFieldValue = this.mdValue.newValue.value;
      }
      const vocabularyOptions = vocabulary ? {
        closed: false,
        name: vocabulary.name
      } : null;
      if (!vocabulary.scrollable) {
        const model = {
          id: 'authorityField',
          label: `${this.dsoType}.edit.metadata.edit.value`,
          vocabularyOptions: vocabularyOptions,
          metadataFields: [this.mdField],
          value: formFieldValue,
          repeatable: false,
          submissionId: 'edit-metadata',
          hasSelectableMetadata: false
        };
        return new _shared_form_builder_ds_dynamic_form_ui_models_onebox_dynamic_onebox_model__WEBPACK_IMPORTED_MODULE_15__.DynamicOneboxModel(model);
      } else {
        const model = {
          id: 'authorityField',
          label: `${this.dsoType}.edit.metadata.edit.value`,
          placeholder: `${this.dsoType}.edit.metadata.edit.value`,
          vocabularyOptions: vocabularyOptions,
          metadataFields: [this.mdField],
          value: formFieldValue,
          repeatable: false,
          submissionId: 'edit-metadata',
          hasSelectableMetadata: false,
          maxOptions: 10
        };
        return new _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_model__WEBPACK_IMPORTED_MODULE_17__.DynamicScrollableDropdownModel(model);
      }
    } else {
      return null;
    }
  }
  /**
   * Change callback for the component. Check if the mdField has changed to retrieve whether it is metadata
   * that uses a controlled vocabulary and update the related properties
   *
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(changes.mdField) && !changes.mdField.firstChange) {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(changes.mdField.currentValue)) {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(changes.mdField.previousValue) && changes.mdField.previousValue !== changes.mdField.currentValue) {
          // Clear authority value in case it has been assigned with the previous metadataField used
          this.mdValue.newValue.authority = null;
          this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_UNSET;
        }
        // Only ask if the current mdField have a period character to reduce request
        if (changes.mdField.currentValue.includes('.')) {
          this.validateMetadataField().subscribe(isValid => {
            if (isValid) {
              this.initAuthorityProperties();
              this.cdr.detectChanges();
            }
          });
        }
      }
    }
  }
  /**
   * Validate the metadata field to check if it exists on the server and return an observable boolean for success/error
   */
  validateMetadataField() {
    return this.registryService.queryMetadataFields(this.mdField, null, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_22__.followLink)('schema')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(rd => {
      if (rd.hasSucceeded) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(rd).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.metadataFieldsToString)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.map)(fields => fields.indexOf(this.mdField) > -1));
      } else {
        this.notificationsService.error(this.translate.instant(`${this.dsoType}.edit.metadata.metadatafield.error`), rd.errorMessage);
        return [false];
      }
    }));
  }
  /**
   * Checks if this field use a authority vocabulary
   */
  isAuthorityControlled() {
    return this.isAuthorityControlled$;
  }
  /**
   * Checks if configured vocabulary is Hierarchical or not
   */
  isHierarchicalVocabulary() {
    return this.isHierarchicalVocabulary$;
  }
  /**
   * Checks if configured vocabulary is Scrollable or not
   */
  isScrollableVocabulary() {
    return this.isScrollableVocabulary$;
  }
  /**
   * Checks if configured vocabulary is Suggester or not
   * (a vocabulary not Scrollable and not Hierarchical that uses an autocomplete field)
   */
  isSuggesterVocabulary() {
    return this.isSuggesterVocabulary$;
  }
  /**
   * Process the change of authority field value updating the authority key and confidence as necessary
   */
  onChangeAuthorityField(event) {
    if (event) {
      this.mdValue.newValue.value = event.value;
      if (event.authority) {
        this.mdValue.newValue.authority = event.authority;
        this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_ACCEPTED;
      } else {
        this.mdValue.newValue.authority = null;
        this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_UNSET;
      }
      this.confirm.emit(false);
    } else {
      // The event is undefined when the user clears the selection in scrollable dropdown
      this.mdValue.newValue.value = '';
      this.mdValue.newValue.authority = null;
      this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_UNSET;
      this.confirm.emit(false);
    }
  }
  /**
   * Returns the {@link DynamicOneboxModel} or {@link DynamicScrollableDropdownModel} model used
   * for the authority field
   */
  getModel() {
    return this.model$.value;
  }
  /**
   * Change the status of the editingAuthority property
   * @param status
   */
  onChangeEditingAuthorityStatus(status) {
    this.editingAuthority = status;
  }
  /**
   * Processes the change in authority value, updating the confidence as necessary.
   * If the authority key is cleared, the confidence is set to {@link ConfidenceType.CF_NOVALUE}.
   * If the authority key is edited and differs from the original, the confidence is set to {@link ConfidenceType.CF_ACCEPTED}.
   */
  onChangeAuthorityKey() {
    if (this.mdValue.newValue.authority === '') {
      this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_NOVALUE;
      this.confirm.emit(false);
    } else if (this.mdValue.newValue.authority !== this.mdValue.originalValue.authority) {
      this.mdValue.newValue.confidence = _core_shared_confidence_type__WEBPACK_IMPORTED_MODULE_7__.ConfidenceType.CF_ACCEPTED;
      this.confirm.emit(false);
    }
  }
  /**
   * Toggles the free-text ediitng mode
   */
  toggleFreeTextEdition() {
    if (this.enabledFreeTextEditing) {
      if (this.getModel().value !== this.mdValue.newValue.value) {
        // Reload the model to adapt it to the new possible value modified during free text editing
        this.initAuthorityProperties();
      }
    }
    this.enabledFreeTextEditing = !this.enabledFreeTextEditing;
  }
  static {
    this.ɵfac = function DsoEditMetadataValueComponent_Factory(t) {
      return new (t || DsoEditMetadataValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_5__.RelationshipDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_core_submission_vocabularies_vocabulary_service__WEBPACK_IMPORTED_MODULE_1__.VocabularyService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_4__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_0__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_6__.MetadataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: DsoEditMetadataValueComponent,
      selectors: [["ds-dso-edit-metadata-value"]],
      inputs: {
        dso: "dso",
        mdValue: "mdValue",
        dsoType: "dsoType",
        saving$: "saving$",
        isOnlyValue: "isOnlyValue",
        mdField: "mdField"
      },
      outputs: {
        edit: "edit",
        confirm: "confirm",
        remove: "remove",
        undo: "undo",
        dragging: "dragging"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex flex-row ds-value-row", "role", "row", "cdkDrag", "", 3, "ngClass", "cdkDragStarted", "cdkDragEnded", 4, "ngVar"], ["role", "row", "cdkDrag", "", 1, "d-flex", "flex-row", "ds-value-row", 3, "cdkDragStarted", "cdkDragEnded", "ngClass"], ["class", "flex-grow-1 ds-flex-cell ds-value-cell d-flex flex-column", "role", "cell", 4, "ngVar"], ["role", "cell", 1, "ds-flex-cell", "ds-lang-cell"], ["class", "dont-break-out preserve-line-breaks", 4, "ngIf"], ["class", "form-control", "type", "text", 3, "ngModel", "dsDebounce", "ngModelChange", "onDebounce", 4, "ngIf"], ["role", "cell", 1, "text-center", "ds-flex-cell", "ds-edit-cell"], [1, "btn-group"], [1, "edit-field"], [1, "btn-group", "edit-buttons", 3, "ngbTooltip"], ["class", "btn btn-outline-primary btn-sm ng-star-inserted", "data-test", "metadata-edit-btn", 3, "title", "ngbTooltip", "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-outline-success btn-sm ng-star-inserted", "data-test", "metadata-confirm-btn", 3, "title", "ngbTooltip", "dsBtnDisabled", "click", 4, "ngIf"], ["data-test", "metadata-remove-btn", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "title", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-trash-alt", "fa-fw"], ["data-test", "metadata-undo-btn", 1, "btn", "btn-outline-warning", "btn-sm", 3, "click", "title", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-undo-alt", "fa-fw"], ["class", "btn btn-outline-secondary ds-drag-handle btn-sm", "data-test", "metadata-drag-btn", "cdkDragHandle", "", 3, "cdkDragHandleDisabled", "ngClass", "dsBtnDisabled", "title", "ngbTooltip", 4, "ngVar"], ["role", "cell", 1, "flex-grow-1", "ds-flex-cell", "ds-value-cell", "d-flex", "flex-column"], ["class", "form-control", "rows", "5", 3, "ngModel", "dsDebounce", "ngModelChange", "onDebounce", 4, "ngIf"], [3, "bindId", "group", "model", "change", 4, "ngIf"], [3, "group", "model", "change", 4, "ngIf"], ["class", "btn btn-secondary mt-2", 3, "title", "click", 4, "ngIf"], [4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "dont-break-out", "preserve-line-breaks"], ["rows", "5", 1, "form-control", 3, "ngModelChange", "onDebounce", "ngModel", "dsDebounce"], [3, "change", "bindId", "group", "model"], [3, "change", "group", "model"], [1, "btn", "btn-secondary", "mt-2", 3, "click", "title"], [1, "fas", "fa-fw", 3, "ngClass"], [1, "badge", "badge-light", "border"], ["dsAuthorityConfidenceState", "", "aria-hidden", "true", 1, "fas", "fa-fw", "p-0", 3, "authorityValue", "iconMode"], [1, "mt-2"], [1, "btn-group", "w-75"], ["dsAuthorityConfidenceState", "", "aria-hidden", "true", 1, "fas", "fa-fw", "p-0", "mr-1", "mt-auto", "mb-auto", 3, "authorityValue", "iconMode"], ["data-test", "authority-input", 1, "form-control", "form-outline", 3, "ngModelChange", "change", "ngModel", "disabled"], ["class", "btn btn-outline-secondary btn-sm ng-star-inserted", "id", "metadata-confirm-btn", 3, "title", "ngbTooltip", "click", 4, "ngIf"], ["class", "btn btn-outline-success btn-sm ng-star-inserted", "id", "metadata-confirm-btn", 3, "title", "ngbTooltip", "click", 4, "ngIf"], ["id", "metadata-confirm-btn", 1, "btn", "btn-outline-secondary", "btn-sm", "ng-star-inserted", 3, "click", "title", "ngbTooltip"], [1, "fas", "fa-lock", "fa-fw"], ["id", "metadata-confirm-btn", 1, "btn", "btn-outline-success", "btn-sm", "ng-star-inserted", 3, "click", "title", "ngbTooltip"], [1, "fas", "fa-lock-open", "fa-fw"], [1, "d-flex"], ["target", "_blank", 1, "mr-2", 3, "routerLink"], [3, "object"], ["type", "text", 1, "form-control", 3, "ngModelChange", "onDebounce", "ngModel", "dsDebounce"], ["data-test", "metadata-edit-btn", 1, "btn", "btn-outline-primary", "btn-sm", "ng-star-inserted", 3, "click", "title", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-edit", "fa-fw"], ["data-test", "metadata-confirm-btn", 1, "btn", "btn-outline-success", "btn-sm", "ng-star-inserted", 3, "click", "title", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-check", "fa-fw"], ["data-test", "metadata-drag-btn", "cdkDragHandle", "", 1, "btn", "btn-outline-secondary", "ds-drag-handle", "btn-sm", 3, "cdkDragHandleDisabled", "ngClass", "dsBtnDisabled", "title", "ngbTooltip"], [1, "fas", "fa-grip-vertical", "fa-fw"]],
      template: function DsoEditMetadataValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](0, DsoEditMetadataValueComponent_div_0_Template, 25, 37, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngVar", ctx.metadataService.isVirtual(ctx.mdValue.newValue));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_23__.VarDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _shared_utils_debounce_directive__WEBPACK_IMPORTED_MODULE_21__.DebounceDirective, _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterLink, _shared_object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_20__.ThemedTypeBadgeComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbTooltip, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__.CdkDragHandle, _angular_common__WEBPACK_IMPORTED_MODULE_36__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.DsDynamicScrollableDropdownComponent, _shared_form_builder_ds_dynamic_form_ui_models_onebox_dynamic_onebox_component__WEBPACK_IMPORTED_MODULE_14__.DsDynamicOneboxComponent, _shared_form_directives_authority_confidence_state_directive__WEBPACK_IMPORTED_MODULE_19__.AuthorityConfidenceStateDirective, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n  border: 1px solid var(--bs-success);\n}\n\n.ds-drag-handle[_ngcontent-%COMP%]:not(.disabled) {\n  cursor: grab;\n}\n\n  .edit-field > ngb-tooltip-window .tooltip-inner {\n  min-width: var(--ds-dso-edit-virtual-tooltip-min-width);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLXZhbHVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxzQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSx1REFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGIiwiZmlsZSI6ImRzby1lZGl0LW1ldGFkYXRhLXZhbHVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWRyYWctaGFuZGxlOm5vdCguZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5lZGl0LWZpZWxkID4gbmdiLXRvb2x0aXAtd2luZG93IC50b29sdGlwLWlubmVyIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC12aXJ0dWFsLXRvb2x0aXAtbWluLXdpZHRoKTtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS12YWx1ZS9kc28tZWRpdC1tZXRhZGF0YS12YWx1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsdURBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjtBQUNBLHdvQ0FBd29DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWRyYWctaGFuZGxlOm5vdCguZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5lZGl0LWZpZWxkID4gbmdiLXRvb2x0aXAtd2luZG93IC50b29sdGlwLWlubmVyIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC12aXJ0dWFsLXRvb2x0aXAtbWluLXdpZHRoKTtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "\n\n\n\n\n\n\n\n\n\n\n\n.ds-field-row[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-gray-400);\n}\n\n.ds-flex-cell[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.ds-lang-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-lang-width);\n  max-width: var(--ds-dso-edit-lang-width);\n}\n\n.ds-edit-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-actions-width);\n}\n\n.ds-value-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.ds-value-row[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%] {\n  background-color: var(--ds-warning-bg);\n}\n\n.ds-value-row.ds-warning[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-warning);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%] {\n  background-color: var(--ds-danger-bg);\n}\n\n.ds-value-row.ds-danger[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-danger);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n}\n\n.ds-value-row.ds-success[_ngcontent-%COMP%]   .ds-flex-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLWNlbGxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFBQTtFQUNFLHdDQUFBO0VBQ0Esd0NBQUE7QUFHRjs7QUFEQTtFQUNFLDJDQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLHNDQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQ0FBQTtBQVFGOztBQU5BO0VBQ0UscUNBQUE7QUFTRjs7QUFQQTtFQUNFLGtDQUFBO0FBVUY7O0FBUkE7RUFDRSxzQ0FBQTtBQVdGOztBQVRBO0VBQ0UsbUNBQUE7QUFZRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS1jZWxscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1maWVsZC1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTQwMCk7XG59XG4uZHMtZmxleC1jZWxsIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtZ3JheS0yMDApO1xufVxuLmRzLWxhbmctY2VsbCB7XG4gIG1pbi13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtZHNvLWVkaXQtbGFuZy13aWR0aCk7XG59XG4uZHMtZWRpdC1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1hY3Rpb25zLXdpZHRoKTtcbn1cbi5kcy12YWx1ZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kcy12YWx1ZS1yb3c6YWN0aXZlIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbi5kcy12YWx1ZS1yb3cuZHMtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLXdhcm5pbmctYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy13YXJuaW5nKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFuZ2VyLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtZGFuZ2VyIC5kcy1mbGV4LWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1kYW5nZXIpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3MgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS1zaGFyZWQvZHNvLWVkaXQtbWV0YWRhdGEtY2VsbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0Usd0NBQUE7RUFDQSx3Q0FBQTtBQUdGOztBQURBO0VBQ0UsMkNBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usc0NBQUE7QUFPRjs7QUFMQTtFQUNFLG1DQUFBO0FBUUY7O0FBTkE7RUFDRSxxQ0FBQTtBQVNGOztBQVBBO0VBQ0Usa0NBQUE7QUFVRjs7QUFSQTtFQUNFLHNDQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQ0FBQTtBQVlGO0FBQ0EsNGxFQUE0bEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5kcy1mbGV4LWNlbGwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ncmF5LTIwMCk7XG59XG4uZHMtbGFuZy1jZWxsIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1sYW5nLXdpZHRoKTtcbn1cbi5kcy1lZGl0LWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWFjdGlvbnMtd2lkdGgpO1xufVxuLmRzLXZhbHVlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRzLXZhbHVlLXJvdzphY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuLmRzLXZhbHVlLXJvdy5kcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtd2FybmluZy1iZyk7XG59XG4uZHMtdmFsdWUtcm93LmRzLXdhcm5pbmcgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXdhcm5pbmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYW5nZXItYmcpO1xufVxuLmRzLXZhbHVlLXJvdy5kcy1kYW5nZXIgLmRzLWZsZXgtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWRhbmdlcik7XG59XG4uZHMtdmFsdWUtcm93LmRzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1zdWNjZXNzLWJnKTtcbn1cbi5kcy12YWx1ZS1yb3cuZHMtc3VjY2VzcyAuZHMtZmxleC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtc3VjY2Vzcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 54085:
/*!*****************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/dso-edit-metadata.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoEditMetadataComponent: () => (/* binding */ DsoEditMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_data_array_move_change_analyzer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/array-move-change-analyzer.service */ 38345);
/* harmony import */ var _core_lazy_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lazy-data-service */ 4047);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_resource_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/resource-type */ 42547);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _dso_edit_metadata_field_values_dso_edit_metadata_field_values_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dso-edit-metadata-field-values/dso-edit-metadata-field-values.component */ 24591);
/* harmony import */ var _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dso-edit-metadata-form */ 41039);
/* harmony import */ var _dso_edit_metadata_headers_dso_edit_metadata_headers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dso-edit-metadata-headers/dso-edit-metadata-headers.component */ 40659);
/* harmony import */ var _dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dso-edit-metadata-value/dso-edit-metadata-value.component */ 80987);
/* harmony import */ var _dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dso-edit-metadata-value-headers/dso-edit-metadata-value-headers.component */ 28043);
/* harmony import */ var _metadata_field_selector_metadata_field_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metadata-field-selector/metadata-field-selector.component */ 57227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 14354);





























function DsoEditMetadataComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 10, ctx_r1.dsoType + ".edit.metadata.reinstate-button"), "");
  }
}
function DsoEditMetadataComponent_div_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, ctx_r1.dsoType + ".edit.metadata.discard-button"))("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 10, ctx_r1.dsoType + ".edit.metadata.discard-button"), "");
  }
}
function DsoEditMetadataComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "ds-metadata-field-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("mdFieldChange", function DsoEditMetadataComponent_div_0_div_23_Template_ds_metadata_field_selector_mdFieldChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.newMdField, $event) || (ctx_r1.newMdField = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 27)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "ds-dso-edit-metadata-value-headers", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ds-dso-edit-metadata-value", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("confirm", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_confirm_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.confirmNewValue($event));
    })("remove", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_remove_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.form.newValue = undefined);
    })("undo", function DsoEditMetadataComponent_div_0_div_23_Template_ds_dso_edit_metadata_value_undo_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.form.newValue = undefined);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("mdField", ctx_r1.newMdField);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dso", ctx_r1.dso)("mdValue", ctx_r1.form.newValue)("dsoType", ctx_r1.dsoType)("saving$", ctx_r1.savingOrLoadingFieldValidation$)("isOnlyValue", true)("mdField", ctx_r1.newMdField);
  }
}
function DsoEditMetadataComponent_div_0_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_div_24_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r7);
      const mdField_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      ctx_r1.form.resetOrder(mdField_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.onValueSaved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, ctx_r1.dsoType + ".edit.metadata.reset-order-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 24)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, DsoEditMetadataComponent_div_0_div_24_div_4_Template, 3, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ds-dso-edit-metadata-field-values", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("valueSaved", function DsoEditMetadataComponent_div_0_div_24_Template_ds_dso_edit_metadata_field_values_valueSaved_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.onValueSaved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdField_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](mdField_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.form.hasOrderChanges(mdField_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dso", ctx_r1.dso)("form", ctx_r1.form)("dsoType", ctx_r1.dsoType)("saving$", ctx_r1.saving$)("draggingMdField$", ctx_r1.draggingMdField$)("mdField", mdField_r8);
  }
}
function DsoEditMetadataComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-alert", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("content", ctx_r1.dsoType + ".edit.metadata.empty")("type", ctx_r1.AlertTypeEnum.Info);
  }
}
function DsoEditMetadataComponent_div_0_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 10, ctx_r1.dsoType + ".edit.metadata.reinstate-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, ctx_r1.dsoType + ".edit.metadata.discard-button"))("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, ctx_r1.saving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 8, ctx_r1.dsoType + ".edit.metadata.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 10, ctx_r1.dsoType + ".edit.metadata.discard-button"), " ");
  }
}
function DsoEditMetadataComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, DsoEditMetadataComponent_div_0_button_10_Template, 8, 12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, DsoEditMetadataComponent_div_0_button_19_Template, 8, 12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](22, "ds-dso-edit-metadata-headers", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, DsoEditMetadataComponent_div_0_div_23_Template, 7, 10, "div", 13)(24, DsoEditMetadataComponent_div_0_div_24_Template, 6, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, DsoEditMetadataComponent_div_0_div_25_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 15)(27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](28, DsoEditMetadataComponent_div_0_button_28_Template, 7, 12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DsoEditMetadataComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, DsoEditMetadataComponent_div_0_button_36_Template, 7, 12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", ctx_r1.form.newValue || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 21, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 23, ctx_r1.dsoType + ".edit.metadata.add-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 25, ctx_r1.dsoType + ".edit.metadata.add-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 27, ctx_r1.dsoType + ".edit.metadata.add-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 29, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 31, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 33, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 35, ctx_r1.dsoType + ".edit.metadata.save-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 37, "item.edit.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsoType", ctx_r1.dsoType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.form.newValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.form.fieldKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isEmpty && !ctx_r1.form.newValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isReinstatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.hasChanges || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](30, 39, ctx_r1.saving$))("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 41, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](32, 43, ctx_r1.dsoType + ".edit.metadata.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 45, ctx_r1.dsoType + ".edit.metadata.save-button"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isReinstatable);
  }
}
function DsoEditMetadataComponent_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-loading");
  }
}
/**
 * Component showing a table of all metadata on a DSpaceObject and options to modify them
 */
class DsoEditMetadataComponent {
  constructor(route, notificationsService, translateService, parentInjector, arrayMoveChangeAnalyser, cdr, dataServiceMap) {
    this.route = route;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.parentInjector = parentInjector;
    this.arrayMoveChangeAnalyser = arrayMoveChangeAnalyser;
    this.cdr = cdr;
    this.dataServiceMap = dataServiceMap;
    /**
     * Whether or not the form is currently being submitted
     */
    this.saving$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    /**
     * Tracks for which metadata-field a drag operation is taking place
     * Null when no drag is currently happening for any field
     * This is a BehaviorSubject that is passed down to child components, to give them the power to alter the state
     */
    this.draggingMdField$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(null);
    /**
     * Whether or not the metadata field is currently being validated
     */
    this.loadingFieldValidation$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    /**
     * The AlertType enumeration for access in the component's template
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__.AlertType;
  }
  /**
   * Read the route (or parent route)'s data to retrieve the current DSpaceObject
   * After it's retrieved, initialise the data-service and form
   */
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasNoValue)(this.dso)) {
      this.dsoUpdateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.route.data, this.route.parent.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(([data, parentData]) => Object.assign({}, data, parentData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(data => this.initDSO(data.dso.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.mergeMap)(() => this.retrieveDataService())).subscribe(dataService => {
        this.initDataService(dataService);
        this.initForm();
      });
    } else {
      this.initDSOType(this.dso);
      this.retrieveDataService().subscribe(dataService => {
        this.initDataService(dataService);
        this.initForm();
      });
    }
    this.savingOrLoadingFieldValidation$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.saving$, this.loadingFieldValidation$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(([saving, loading]) => saving || loading));
  }
  /**
   * Resolve the data-service for the current DSpaceObject and retrieve its instance
   */
  retrieveDataService() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasNoValue)(this.updateDataService)) {
      const lazyProvider$ = (0,_core_lazy_data_service__WEBPACK_IMPORTED_MODULE_2__.lazyDataService)(this.dataServiceMap, this.dsoType, this.parentInjector);
      return lazyProvider$;
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(this.updateDataService);
    }
  }
  /**
   * Initialise the current DSpaceObject
   */
  initDSO(object) {
    this.dso = object;
    this.initDSOType(object);
  }
  /**
   * Initialise the current DSpaceObject's type
   */
  initDSOType(object) {
    let type;
    if (typeof object.type === 'string') {
      type = new _core_shared_resource_type__WEBPACK_IMPORTED_MODULE_5__.ResourceType(object.type);
    } else {
      type = object.type;
    }
    this.dsoType = type.value;
  }
  /**
   * Initialise the data-service for the current DSpaceObject
   */
  initDataService(dataService) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(dataService)) {
      this.updateDataService = dataService;
    }
  }
  /**
   * Initialise the dynamic form object by passing the DSpaceObject's metadata
   * Call onValueSaved() to update the form's state properties
   */
  initForm() {
    this.form = new _dso_edit_metadata_form__WEBPACK_IMPORTED_MODULE_13__.DsoEditMetadataForm(this.dso.metadata);
    this.onValueSaved();
    this.cdr.detectChanges();
  }
  /**
   * Update the form's state properties
   */
  onValueSaved() {
    this.hasChanges = this.form.hasChanges();
    this.isReinstatable = this.form.isReinstatable();
    this.isEmpty = Object.keys(this.form.fields).length === 0;
  }
  /**
   * Submit the current changes to the form by retrieving json PATCH operations from the form and sending it to the
   * DSpaceObject's data-service
   * Display notificiations and reset the form afterwards if successful
   */
  submit() {
    this.saving$.next(true);
    this.updateDataService.patch(this.dso, this.form.getOperations(this.arrayMoveChangeAnalyser)).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(rd => {
      this.saving$.next(false);
      if (rd.hasFailed) {
        this.notificationsService.error(this.translateService.instant(`${this.dsoType}.edit.metadata.notifications.error.title`), rd.errorMessage);
      } else {
        this.notificationsService.success(this.translateService.instant(`${this.dsoType}.edit.metadata.notifications.saved.title`), this.translateService.instant(`${this.dsoType}.edit.metadata.notifications.saved.content`));
        this.dso = rd.payload;
        this.initForm();
      }
    });
  }
  /**
   * Confirm the newly added value
   * @param saved Whether or not the value was manually saved (only then, add the value to its metadata field)
   */
  confirmNewValue(saved) {
    if (saved) {
      this.setMetadataField();
    }
  }
  /**
   * Set the metadata field of the temporary added new metadata value
   * This will move the new value to its respective parent metadata field
   * Validate the metadata field first
   */
  setMetadataField() {
    this.form.resetReinstatable();
    this.loadingFieldValidation$.next(true);
    this.metadataFieldSelectorComponent.validate().subscribe(valid => {
      this.loadingFieldValidation$.next(false);
      if (valid) {
        this.form.setMetadataField(this.newMdField);
        this.onValueSaved();
      }
    });
  }
  /**
   * Add a new temporary metadata value
   */
  add() {
    this.newMdField = undefined;
    this.form.add();
  }
  /**
   * Discard all changes within the current form
   */
  discard() {
    this.form.discard();
    this.onValueSaved();
  }
  /**
   * Restore any changes previously discarded from the form
   */
  reinstate() {
    this.form.reinstate();
    this.onValueSaved();
  }
  /**
   * Unsubscribe from any open subscriptions
   */
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(this.dsoUpdateSubscription)) {
      this.dsoUpdateSubscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function DsoEditMetadataComponent_Factory(t) {
      return new (t || DsoEditMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_array_move_change_analyzer_service__WEBPACK_IMPORTED_MODULE_1__.ArrayMoveChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_DATA_SERVICES_MAP));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: DsoEditMetadataComponent,
      selectors: [["ds-base-dso-edit-metadata"]],
      viewQuery: function DsoEditMetadataComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_metadata_field_selector_metadata_field_selector_component__WEBPACK_IMPORTED_MODULE_17__.MetadataFieldSelectorComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.metadataFieldSelectorComponent = _t.first);
        }
      },
      inputs: {
        dso: "dso",
        updateDataService: "updateDataService"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "item-metadata", 4, "ngIf"], [4, "ngIf"], [1, "item-metadata"], [1, "button-row", "top", "d-flex", "my-2", "space-children-mr", "ml-gap"], ["id", "dso-add-btn", 1, "mr-auto", "btn", "btn-success", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline"], ["class", "btn btn-warning ml-1", "id", "dso-reinstate-btn", 3, "dsBtnDisabled", "title", "click", 4, "ngIf"], ["id", "dso-save-btn", 1, "btn", "btn-primary", "ml-1", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-save"], ["class", "btn btn-danger ml-1", "id", "dso-discard-btn", 3, "title", "dsBtnDisabled", "click", 4, "ngIf"], ["role", "table"], [3, "dsoType"], ["class", "d-flex flex-row ds-field-row", "role", "row", 4, "ngIf"], ["class", "d-flex flex-row ds-field-row", "role", "row", 4, "ngFor", "ngForOf"], [1, "button-row", "bottom", "d-inline-block", "w-100"], [1, "mt-2", "float-right", "space-children-mr", "ml-gap"], ["class", "btn btn-warning", 3, "dsBtnDisabled", "title", "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled", "title"], ["class", "btn btn-danger", 3, "title", "dsBtnDisabled", "click", 4, "ngIf"], ["id", "dso-reinstate-btn", 1, "btn", "btn-warning", "ml-1", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-undo-alt"], ["id", "dso-discard-btn", 1, "btn", "btn-danger", "ml-1", 3, "click", "title", "dsBtnDisabled"], ["aria-hidden", "true", 1, "fas", "fa-times"], ["role", "row", 1, "d-flex", "flex-row", "ds-field-row"], ["role", "rowheader", 1, "lbl-cell", "ds-success"], [3, "mdFieldChange", "dsoType", "mdField", "autofocus"], ["role", "cell", 1, "flex-grow-1", "ds-drop-list"], ["role", "presentation", 3, "dsoType"], [3, "confirm", "remove", "undo", "dso", "mdValue", "dsoType", "saving$", "isOnlyValue", "mdField"], ["role", "rowheader", 1, "lbl-cell"], [1, "dont-break-out", "preserve-line-breaks"], ["class", "btn btn-warning reset-order-button mt-2 w-100", 3, "click", 4, "ngIf"], ["role", "cell", 1, "flex-grow-1", 3, "valueSaved", "dso", "form", "dsoType", "saving$", "draggingMdField$", "mdField"], [1, "btn", "btn-warning", "reset-order-button", "mt-2", "w-100", 3, "click"], [3, "content", "type"], [1, "btn", "btn-warning", 3, "click", "dsBtnDisabled", "title"], [1, "btn", "btn-danger", 3, "click", "title", "dsBtnDisabled"]],
      template: function DsoEditMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, DsoEditMetadataComponent_div_0_Template, 37, 47, "div", 0)(1, DsoEditMetadataComponent_ds_loading_1_Template, 1, 0, "ds-loading", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _dso_edit_metadata_headers_dso_edit_metadata_headers_component__WEBPACK_IMPORTED_MODULE_14__.DsoEditMetadataHeadersComponent, _metadata_field_selector_metadata_field_selector_component__WEBPACK_IMPORTED_MODULE_17__.MetadataFieldSelectorComponent, _dso_edit_metadata_value_headers_dso_edit_metadata_value_headers_component__WEBPACK_IMPORTED_MODULE_16__.DsoEditMetadataValueHeadersComponent, _dso_edit_metadata_value_dso_edit_metadata_value_component__WEBPACK_IMPORTED_MODULE_15__.DsoEditMetadataValueComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgFor, _dso_edit_metadata_field_values_dso_edit_metadata_field_values_component__WEBPACK_IMPORTED_MODULE_12__.DsoEditMetadataFieldValuesComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_8__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.lbl-cell[_ngcontent-%COMP%] {\n  min-width: var(--ds-dso-edit-field-width);\n  max-width: var(--ds-dso-edit-field-width);\n  background-color: var(--bs-gray-100);\n  font-weight: bold;\n  padding: 1rem;\n  border: 1px solid var(--bs-gray-200);\n}\n\n.lbl-cell.ds-success[_ngcontent-%COMP%] {\n  background-color: var(--ds-success-bg);\n  border: 1px solid var(--bs-success);\n}\n\n.ds-field-row[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-gray-400);\n}\n\n.reset-order-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzby1lZGl0LW1ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRiIsImZpbGUiOiJkc28tZWRpdC1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGJsLWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWZpZWxkLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktMjAwKTtcbn1cbi5sYmwtY2VsbC5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5yZXNldC1vcmRlci1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9kc28tZWRpdC1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFDQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7QUFDQSxnM0NBQWczQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGJsLWNlbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWRzby1lZGl0LWZpZWxkLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1kc28tZWRpdC1maWVsZC13aWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMTAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktMjAwKTtcbn1cbi5sYmwtY2VsbC5kcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtc3VjY2Vzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXN1Y2Nlc3MpO1xufVxuLmRzLWZpZWxkLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWdyYXktNDAwKTtcbn1cbi5yZXNldC1vcmRlci1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57227:
/*!***********************************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/metadata-field-selector/metadata-field-selector.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataFieldSelectorComponent: () => (/* binding */ MetadataFieldSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 47943);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/registry/registry.service */ 67558);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/click-outside.directive */ 46301);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);





















const _c0 = ["mdFieldInput"];
const _c1 = a0 => ({
  "is-invalid": a0
});
const _c2 = a0 => ({
  "show": a0
});
function MetadataFieldSelectorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.dsoType + ".edit.metadata.metadatafield.invalid"));
  }
}
function MetadataFieldSelectorComponent_ng_container_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MetadataFieldSelectorComponent_ng_container_9_button_1_Template_button_click_0_listener() {
      const listEntry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.select(listEntry_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const listEntry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", listEntry_r4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function MetadataFieldSelectorComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MetadataFieldSelectorComponent_ng_container_9_button_1_Template, 3, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.mdFieldOptions$));
  }
}
function MetadataFieldSelectorComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-loading", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showMessage", false);
  }
}
/**
 * Component displaying a searchable input for metadata-fields
 */
class MetadataFieldSelectorComponent {
  constructor(registryService, notificationsService, translate) {
    this.registryService = registryService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    /**
     * If true, the input will be automatically focussed upon when the component is first loaded
     */
    this.autofocus = false;
    /**
     * Emit any changes made to the metadata field
     * This will only emit after a debounce takes place to avoid constant emits when the user is typing
     */
    this.mdFieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * List of available metadata field options to choose from, dependent on the current query the user entered
     * Shows up in a dropdown below the input
     */
    this.mdFieldOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**
     * FormControl for the input
     */
    this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl();
    /**
     * The current query to update mdFieldOptions$ for
     * This is controlled by a debounce, to avoid too many requests
     */
    this.query$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    /**
     * The amount of time to debounce the query for (in ms)
     */
    this.debounceTime = 300;
    /**
     * Whether or not the the user just selected a value
     * This flag avoids the metadata field from updating twice, which would result in the dropdown opening again right after selecting a value
     */
    this.selectedValueLoading = false;
    /**
     * Whether or not to show the invalid feedback
     * True when validate() is called and the mdField isn't present in the available metadata fields retrieved from the server
     */
    this.showInvalid = false;
    /**
     * Subscriptions to unsubscribe from on destroy
     */
    this.subs = [];
    /**
     * The current page to load
     * Dynamically goes up as the user scrolls down until it reaches the last page possible
     */
    this.currentPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(1);
    /**
     * Whether or not the list contains a next page to load
     * This allows us to avoid next pages from trying to load when there are none
     */
    this.hasNextPage = false;
    /**
     * Whether or not new results are currently loading
     */
    this.loading = false;
    /**
     * Default page option for this feature
     */
    this.pageOptions = {
      elementsPerPage: 20,
      sort: new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortOptions('fieldName', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortDirection.ASC)
    };
  }
  /**
   * Subscribe to any changes made to the input, with a debounce and fire a query, as well as emit the change from this component
   * Update the mdFieldOptions$ depending on the query$ fired by querying the server
   */
  ngOnInit() {
    this.subs.push(this.input.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)('')).subscribe(valueChange => {
      this.currentPage$.next(1);
      if (!this.selectedValueLoading) {
        this.query$.next(valueChange);
      }
      this.mdField = valueChange;
      this.mdFieldChange.emit(this.mdField);
    }));
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(this.query$, this.currentPage$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([query, page]) => {
      this.loading = true;
      if (page === 1) {
        this.mdFieldOptions$.next([]);
      }
      return this.search(query, page);
    })).subscribe(rd => {
      if (!this.selectedValueLoading) {
        this.updateList(rd);
      }
    }));
  }
  /**
   * Focus the input if autofocus is enabled
   */
  ngAfterViewInit() {
    if (this.autofocus) {
      this.mdFieldInput.nativeElement.focus();
    }
  }
  /**
   * Validate the metadata field to check if it exists on the server and return an observable boolean for success/error
   * Upon subscribing to the returned observable, the showInvalid flag is updated accordingly to show the feedback under the input
   */
  validate() {
    return this.registryService.queryMetadataFields(this.mdField, null, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_7__.followLink)('schema')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(rd => {
      if (rd.hasSucceeded) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(rd).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.metadataFieldsToString)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(fields => fields.indexOf(this.mdField) > -1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(exists => this.showInvalid = !exists));
      } else {
        this.notificationsService.error(this.translate.instant(`${this.dsoType}.edit.metadata.metadatafield.error`), rd.errorMessage);
        return [false];
      }
    }));
  }
  /**
   * Select a metadata field from the dropdown options
   * @param mdFieldOption
   */
  select(mdFieldOption) {
    this.selectedValueLoading = true;
    this.input.setValue(mdFieldOption);
  }
  /**
   * When the user reaches the bottom of the page (or almost) and there's a next page available, increase the current page
   */
  onScrollDown() {
    if (this.hasNextPage && !this.loading) {
      this.currentPage$.next(this.currentPage$.value + 1);
    }
  }
  /**
   * @Description It update the mdFieldOptions$ according the query result page
   * */
  updateList(list) {
    this.loading = false;
    this.hasNextPage = list.length > 0;
    const currentEntries = this.mdFieldOptions$.getValue();
    this.mdFieldOptions$.next([...currentEntries, ...list]);
    this.selectedValueLoading = false;
  }
  /**
   * Perform a search for the current query and page
   * @param query Query to search objects for
   * @param page  Page to retrieve
   * @param useCache Whether or not to use the cache
   */
  search(query, page, useCache = true) {
    return this.registryService.queryMetadataFields(query, {
      elementsPerPage: this.pageOptions.elementsPerPage,
      sort: this.pageOptions.sort,
      currentPage: page
    }, useCache, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_7__.followLink)('schema')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.metadataFieldsToString)());
  }
  /**
   * Unsubscribe from any open subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function MetadataFieldSelectorComponent_Factory(t) {
      return new (t || MetadataFieldSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: MetadataFieldSelectorComponent,
      selectors: [["ds-metadata-field-selector"]],
      viewQuery: function MetadataFieldSelectorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.mdFieldInput = _t.first);
        }
      },
      inputs: {
        dsoType: "dsoType",
        mdField: "mdField",
        autofocus: "autofocus"
      },
      outputs: {
        mdFieldChange: "mdFieldChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 22,
      consts: [["mdFieldInput", ""], ["listEntryElement", ""], [1, "w-100", "position-relative"], ["type", "text", 1, "form-control", 3, "focusin", "dsClickOutside", "click", "keyup", "ngClass", "value", "formControl"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], ["id", "scrollable-metadata-field-selector", 1, "dropdown-menu", "scrollable-menu", 3, "ngClass"], [1, "dropdown-list"], ["infiniteScroll", "", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot"], [4, "ngIf"], ["class", "list-group-item list-group-item-action border-0 list-entry", 4, "ngIf"], [1, "invalid-feedback", "show-feedback"], ["class", "d-block dropdown-item", "dsHoverClass", "ds-hover", 3, "click", 4, "ngFor", "ngForOf"], ["dsHoverClass", "ds-hover", 1, "d-block", "dropdown-item", 3, "click"], [3, "innerHTML"], [1, "list-group-item", "list-group-item-action", "border-0", "list-entry"], [3, "showMessage"]],
      template: function MetadataFieldSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "input", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusin", function MetadataFieldSelectorComponent_Template_input_focusin_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.query$.next(ctx.mdField));
          })("dsClickOutside", function MetadataFieldSelectorComponent_Template_input_dsClickOutside_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.query$.next(null));
          })("click", function MetadataFieldSelectorComponent_Template_input_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
          })("keyup", function MetadataFieldSelectorComponent_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.selectedValueLoading = false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MetadataFieldSelectorComponent_div_4_Template, 3, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scrolled", function MetadataFieldSelectorComponent_Template_div_scrolled_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onScrollDown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MetadataFieldSelectorComponent_ng_container_9_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, MetadataFieldSelectorComponent_button_11_Template, 2, 1, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, ctx.showInvalid))("value", ctx.mdField)("formControl", ctx.input);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 12, ctx.dsoType + ".edit.metadata.metadatafield"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showInvalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c2, ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 14, ctx.mdFieldOptions$)) == null ? null : tmp_6_0.length) > 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 0)("infiniteScrollContainer", "#scrollable-metadata-field-selector")("fromRoot", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 16, ctx.mdFieldOptions$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _shared_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_6__.ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__.ThemedLoadingComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__.InfiniteScrollDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dso-selector-list-max-height);\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLWZpZWxkLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6Im1ldGFkYXRhLWZpZWxkLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zY3JvbGxhYmxlLW1lbnUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWRzby1zZWxlY3Rvci1saXN0LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHNvLXNoYXJlZC9kc28tZWRpdC1tZXRhZGF0YS9tZXRhZGF0YS1maWVsZC1zZWxlY3Rvci9tZXRhZGF0YS1maWVsZC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNBLGd6QkFBZ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zY3JvbGxhYmxlLW1lbnUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWRzby1zZWxlY3Rvci1saXN0LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 13707:
/*!************************************************************************************!*\
  !*** ./src/app/dso-shared/dso-edit-metadata/themed-dso-edit-metadata.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedDsoEditMetadataComponent: () => (/* binding */ ThemedDsoEditMetadataComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dso-edit-metadata.component */ 54085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedDsoEditMetadataComponent_ng_template_0_Template(rf, ctx) {}
class ThemedDsoEditMetadataComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['dso', 'updateDataService'];
  }
  getComponentName() {
    return 'DsoEditMetadataComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(30207)(`./${themeName}/app/dso-shared/dso-edit-metadata/dso-edit-metadata.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dso-edit-metadata.component */ 54085));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedDsoEditMetadataComponent_BaseFactory;
      return function ThemedDsoEditMetadataComponent_Factory(t) {
        return (ɵThemedDsoEditMetadataComponent_BaseFactory || (ɵThemedDsoEditMetadataComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedDsoEditMetadataComponent)))(t || ThemedDsoEditMetadataComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedDsoEditMetadataComponent,
      selectors: [["ds-dso-edit-metadata"]],
      inputs: {
        dso: "dso",
        updateDataService: "updateDataService"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedDsoEditMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedDsoEditMetadataComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 30207:
/*!***************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/dso\-shared\/dso\-edit\-metadata\/dso\-edit\-metadata\.component$ namespace object ***!
  \***************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/dso-shared/dso-edit-metadata/dso-edit-metadata.component": [
		46296,
		"src_themes_custom_app_dso-shared_dso-edit-metadata_dso-edit-metadata_component_ts"
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
webpackAsyncContext.id = 30207;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_breadcrumbs_i18n-breadcrumb_resolver_ts-src_app_dso-shared_dso-edit-meta-179f34.js.map