"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_media-viewer_media-viewer_component_ts"],{

/***/ 81917:
/*!********************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/media-viewer/media-viewer.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaViewerComponent: () => (/* binding */ MediaViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_media_viewer_media_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/item-page/media-viewer/media-viewer.component */ 79738);
/* harmony import */ var _app_item_page_media_viewer_media_viewer_image_themed_media_viewer_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/item-page/media-viewer/media-viewer-image/themed-media-viewer-image.component */ 56242);
/* harmony import */ var _app_item_page_media_viewer_media_viewer_video_themed_media_viewer_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/item-page/media-viewer/media-viewer-video/themed-media-viewer-video.component */ 38342);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);










const _c0 = () => ["audio", "video"];
function MediaViewerComponent_ng_container_0_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "loading.default"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showMessage", false);
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ds_media_viewer_video_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-media-viewer-video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const mediaList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("medias", mediaList_r1)("captions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx_r1.captions$));
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ds_media_viewer_image_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-media-viewer-image", 10);
  }
  if (rf & 2) {
    const mediaList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5).ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("images", mediaList_r1);
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ds_media_viewer_video_1_Template, 2, 4, "ds-media-viewer-video", 7)(2, MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ds_media_viewer_image_2_Template, 1, 1, "ds-media-viewer-image", 8)(3, MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const showImage_r3 = ctx.ngVar;
    const showVideo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    const showThumbnail_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", showVideo_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", showImage_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", showImage_r3 || showVideo_r4)("ngIfElse", showThumbnail_r5);
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_ng_container_1_Template, 4, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mediaList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", ctx_r1.mediaOptions.image && (mediaList_r1[0] == null ? null : mediaList_r1[0].format) === "image");
  }
}
function MediaViewerComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MediaViewerComponent_ng_container_0_div_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mediaList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", ctx_r1.mediaOptions.video && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0).includes(mediaList_r1[0] == null ? null : mediaList_r1[0].format));
  }
}
function MediaViewerComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MediaViewerComponent_ng_container_0_div_2_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mediaList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngVar;
    const showThumbnail_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", mediaList_r1.length > 0)("ngIfElse", showThumbnail_r5);
  }
}
function MediaViewerComponent_ng_container_0_ng_template_3_ds_media_viewer_image_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-media-viewer-image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("image", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx_r1.thumbnailsRD$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.page[0] == null ? null : tmp_5_0.payload.page[0]._links.content.href) || ctx_r1.thumbnailPlaceholder)("preview", false);
  }
}
function MediaViewerComponent_ng_container_0_ng_template_3_ds_thumbnail_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-thumbnail", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("thumbnail", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r1.thumbnailsRD$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.page[0]);
  }
}
function MediaViewerComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MediaViewerComponent_ng_container_0_ng_template_3_ds_media_viewer_image_0_Template, 2, 4, "ds-media-viewer-image", 11)(1, MediaViewerComponent_ng_container_0_ng_template_3_ds_thumbnail_1_Template, 2, 3, "ds-thumbnail", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mediaOptions.image && ctx_r1.mediaOptions.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx_r1.mediaOptions.image && ctx_r1.mediaOptions.video));
  }
}
function MediaViewerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MediaViewerComponent_ng_container_0_ds_loading_1_Template, 2, 4, "ds-loading", 2)(2, MediaViewerComponent_ng_container_0_div_2_Template, 2, 2, "div", 3)(3, MediaViewerComponent_ng_container_0_ng_template_3_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
  }
}
class MediaViewerComponent extends _app_item_page_media_viewer_media_viewer_component__WEBPACK_IMPORTED_MODULE_0__.MediaViewerComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMediaViewerComponent_BaseFactory;
      return function MediaViewerComponent_Factory(t) {
        return (ɵMediaViewerComponent_BaseFactory || (ɵMediaViewerComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MediaViewerComponent)))(t || MediaViewerComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MediaViewerComponent,
      selectors: [["ds-themed-media-viewer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["showThumbnail", ""], [4, "ngVar"], [3, "message", "showMessage", 4, "ngIf"], ["class", "media-viewer", 4, "ngIf"], [3, "message", "showMessage"], [1, "media-viewer"], [4, "ngIf", "ngIfElse"], [3, "medias", "captions", 4, "ngIf"], [3, "images", 4, "ngIf"], [3, "medias", "captions"], [3, "images"], [3, "image", "preview", 4, "ngIf"], [3, "thumbnail", 4, "ngIf"], [3, "image", "preview"], [3, "thumbnail"]],
      template: function MediaViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MediaViewerComponent_ng_container_0_Template, 5, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.mediaList$));
        }
      },
      dependencies: [_app_item_page_media_viewer_media_viewer_image_themed_media_viewer_image_component__WEBPACK_IMPORTED_MODULE_1__.ThemedMediaViewerImageComponent, _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _app_item_page_media_viewer_media_viewer_video_themed_media_viewer_video_component__WEBPACK_IMPORTED_MODULE_2__.ThemedMediaViewerVideoComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJtZWRpYS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL21lZGlhLXZpZXdlci9tZWRpYS12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_media-viewer_media-viewer_component_ts.js.map