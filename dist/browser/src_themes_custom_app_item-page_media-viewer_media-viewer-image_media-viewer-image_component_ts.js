"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_media-viewer_media-viewer-image_media-viewer-image_component_ts"],{

/***/ 59655:
/*!*********************************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/media-viewer/media-viewer-image/media-viewer-image.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaViewerImageComponent: () => (/* binding */ MediaViewerImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 52495);
/* harmony import */ var _app_item_page_media_viewer_media_viewer_image_media_viewer_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/item-page/media-viewer/media-viewer-image/media-viewer-image.component */ 39630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);





class MediaViewerImageComponent extends _app_item_page_media_viewer_media_viewer_image_media_viewer_image_component__WEBPACK_IMPORTED_MODULE_0__.MediaViewerImageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMediaViewerImageComponent_BaseFactory;
      return function MediaViewerImageComponent_Factory(t) {
        return (ɵMediaViewerImageComponent_BaseFactory || (ɵMediaViewerImageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MediaViewerImageComponent)))(t || MediaViewerImageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MediaViewerImageComponent,
      selectors: [["ds-themed-media-viewer-image"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 6,
      consts: [[1, "ngx-gallery", 3, "options", "images"]],
      template: function MediaViewerImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-gallery", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("change-gallery", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx.isAuthenticated$));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);
        }
      },
      dependencies: [_kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_2__.NgxGalleryModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_2__.NgxGalleryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     .ngx-gallery {\n  width: unset !important;\n  height: unset !important;\n}\n\n[_nghost-%COMP%]     ngx-gallery-image {\n  max-width: 340px !important;\n}\n\n[_nghost-%COMP%]     ngx-gallery-image .ngx-gallery-image {\n  background-position: left;\n}\n\n[_nghost-%COMP%]     ngx-gallery-image:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXZpZXdlci1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoibWVkaWEtdmlld2VyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIG5neC1nYWxsZXJ5LWltYWdlIHtcbiAgbWF4LXdpZHRoOiAzNDBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIG5neC1nYWxsZXJ5LWltYWdlIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgbmd4LWdhbGxlcnktaW1hZ2U6YWZ0ZXIge1xuICBwYWRkaW5nLXRvcDogNzUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL21lZGlhLXZpZXdlci9tZWRpYS12aWV3ZXItaW1hZ2UvbWVkaWEtdmlld2VyLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFJRjtBQUNBLHdzQ0FBd3NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIG5neC1nYWxsZXJ5LWltYWdlIHtcbiAgbWF4LXdpZHRoOiAzNDBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIG5neC1nYWxsZXJ5LWltYWdlIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgbmd4LWdhbGxlcnktaW1hZ2U6YWZ0ZXIge1xuICBwYWRkaW5nLXRvcDogNzUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_media-viewer_media-viewer-image_media-viewer-image_component_ts.js.map