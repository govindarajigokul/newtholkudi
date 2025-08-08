"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_thumbnail_thumbnail_component_ts"],{

/***/ 71859:
/*!****************************************************************!*\
  !*** ./src/themes/custom/app/thumbnail/thumbnail.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailComponent: () => (/* binding */ ThumbnailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/shared/utils/safe-url-pipe */ 43764);
/* harmony import */ var _app_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/thumbnail/thumbnail.component */ 73900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  "d-none": a0
});
function ThumbnailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ds-loading", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("spinner", true);
  }
}
function ThumbnailComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "dsSafeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function ThumbnailComponent_img_2_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.errorHandler());
    })("load", function ThumbnailComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.successHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx_r1.isLoading))("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r1.src), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx_r1.alt));
  }
}
function ThumbnailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, ctx_r1.placeholder), " ");
  }
}
class ThumbnailComponent extends _app_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__.ThumbnailComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThumbnailComponent_BaseFactory;
      return function ThumbnailComponent_Factory(t) {
        return (ɵThumbnailComponent_BaseFactory || (ɵThumbnailComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThumbnailComponent)))(t || ThumbnailComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThumbnailComponent,
      selectors: [["ds-themed-thumbnail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 5,
      consts: [[1, "thumbnail"], ["class", "thumbnail-content outer", 4, "ngIf"], ["class", "thumbnail-content img-fluid", 3, "ngClass", "src", "alt", "error", "load", 4, "ngIf"], [1, "thumbnail-content", "outer"], [1, "inner"], [1, "centered"], [3, "spinner"], [1, "thumbnail-content", "img-fluid", 3, "error", "load", "ngClass", "src", "alt"], [1, "thumbnail-placeholder", "centered", "lead"]],
      template: function ThumbnailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ThumbnailComponent_div_1_Template, 4, 1, "div", 1)(2, ThumbnailComponent_img_2_Template, 3, 9, "img", 2)(3, ThumbnailComponent_div_3_Template, 5, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("limit-width", ctx.limitWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.src !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.src === null && !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _app_shared_utils_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeUrlPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.limit-width[_ngcontent-%COMP%] {\n  max-width: var(--ds-thumbnail-max-width);\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.outer[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.outer[_ngcontent-%COMP%]:before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  padding-top: 141.4285714286%;\n}\n\n.outer[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.outer[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%]    > .thumbnail-placeholder[_ngcontent-%COMP%] {\n  background: var(--ds-thumbnail-placeholder-background);\n  border: var(--ds-thumbnail-placeholder-border);\n  color: var(--ds-thumbnail-placeholder-color);\n  font-weight: bold;\n}\n\n.outer[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%]    > .centered[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1ibmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usd0NBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBS0Y7O0FBSEE7RUFDRSxzREFBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBT0YiLCJmaWxlIjoidGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5saW1pdC13aWR0aCB7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtdGh1bWJuYWlsLW1heC13aWR0aCk7XG59XG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ub3V0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3V0ZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTQxLjQyODU3MTQyODYlO1xufVxuLm91dGVyID4gLmlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4ub3V0ZXIgPiAuaW5uZXIgPiAudGh1bWJuYWlsLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZHMtdGh1bWJuYWlsLXBsYWNlaG9sZGVyLWJhY2tncm91bmQpO1xuICBib3JkZXI6IHZhcigtLWRzLXRodW1ibmFpbC1wbGFjZWhvbGRlci1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tZHMtdGh1bWJuYWlsLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3V0ZXIgPiAuaW5uZXIgPiAuY2VudGVyZWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGh1bWJuYWlsL3RodW1ibmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usd0NBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBS0Y7O0FBSEE7RUFDRSxzREFBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBT0Y7QUFDQSxnNURBQWc1RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGltaXQtd2lkdGgge1xuICBtYXgtd2lkdGg6IHZhcigtLWRzLXRodW1ibmFpbC1tYXgtd2lkdGgpO1xufVxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm91dGVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE0MS40Mjg1NzE0Mjg2JTtcbn1cbi5vdXRlciA+IC5pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuLm91dGVyID4gLmlubmVyID4gLnRodW1ibmFpbC1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRzLXRodW1ibmFpbC1wbGFjZWhvbGRlci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiB2YXIoLS1kcy10aHVtYm5haWwtcGxhY2Vob2xkZXItYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLWRzLXRodW1ibmFpbC1wbGFjZWhvbGRlci1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm91dGVyID4gLmlubmVyID4gLmNlbnRlcmVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_thumbnail_thumbnail_component_ts.js.map