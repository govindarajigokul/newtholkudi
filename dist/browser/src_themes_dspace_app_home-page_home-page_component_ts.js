"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_dspace_app_home-page_home-page_component_ts"],{

/***/ 30354:
/*!********************************************************************!*\
  !*** ./src/themes/dspace/app/hero-banner/hero-banner.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroBannerComponent: () => (/* binding */ HeroBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



function HeroBannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r2.currentSlide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "Hero Banner " + (i_r2 + 1));
  }
}
function HeroBannerComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_span_8_Template_span_click_0_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.goToSlide(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r5 === ctx_r2.currentSlide);
  }
}
class HeroBannerComponent {
  constructor() {
    // Tamil hero banner images
    this.heroImages = ['assets/images/hero-banners/HERO BANNER FOR THOLKUDI - final version TAMIL.jpg', 'assets/images/hero-banners/HERO BANNER FOR THOLKUDI - final version TAMIL2.jpg', 'assets/images/hero-banners/HERO BANNER FOR THOLKUDI - final version TAMIL3.jpg', 'assets/images/hero-banners/HERO BANNER FOR THOLKUDI - final version TAMIL4.jpg', 'assets/images/hero-banners/HERO BANNER FOR THOLKUDI - final version TAMIL5.jpg'];
    this.currentSlide = 0;
    this.autoSlideDelay = 7000; // 7 seconds
  }
  ngOnInit() {
    this.startAutoSlide();
  }
  ngOnDestroy() {
    this.stopAutoSlide();
  }
  /**
   * Start automatic sliding
   */
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideDelay);
  }
  /**
   * Stop automatic sliding
   */
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  /**
   * Go to next slide
   */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
  }
  /**
   * Go to previous slide
   */
  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroImages.length - 1 : this.currentSlide - 1;
  }
  /**
   * Go to specific slide
   */
  goToSlide(index) {
    this.currentSlide = index;
    // Restart auto-slide timer when manually navigating
    this.stopAutoSlide();
    this.startAutoSlide();
  }
  /**
   * Pause auto-slide on hover
   */
  onMouseEnter() {
    this.stopAutoSlide();
  }
  /**
   * Resume auto-slide when mouse leaves
   */
  onMouseLeave() {
    this.startAutoSlide();
  }
  static {
    this.ɵfac = function HeroBannerComponent_Factory(t) {
      return new (t || HeroBannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroBannerComponent,
      selectors: [["ds-hero-banner"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 2,
      consts: [[1, "hero-container"], [1, "hero-slider"], ["class", "hero-slide", 3, "active", 4, "ngFor", "ngForOf"], ["aria-label", "Previous slide", 1, "hero-prev", 3, "click"], ["aria-label", "Next slide", 1, "hero-next", 3, "click"], [1, "hero-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "hero-slide"], [1, "hero-image", 3, "src", "alt"], [1, "dot", 3, "click"]],
      template: function HeroBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeroBannerComponent_div_2_Template, 2, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_Template_button_click_3_listener() {
            return ctx.prevSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2039 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_Template_button_click_5_listener() {
            return ctx.nextSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u203A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeroBannerComponent_span_8_Template, 1, 2, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroImages);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroImages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.hero-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 5px solid #6b2f30 !important;\n}\n\n.hero-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  overflow: hidden;\n}\n\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n}\n\n.hero-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  display: block;\n}\n\n.hero-prev[_ngcontent-%COMP%], .hero-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 10;\n  transition: background 0.3s ease;\n}\n\n.hero-prev[_ngcontent-%COMP%]:hover, .hero-next[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.hero-prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.hero-next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.hero-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 10;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.dot.active[_ngcontent-%COMP%] {\n  background: white;\n}\n\n@media (min-width: 2560px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 600px;\n    max-width: 1920px;\n    margin: 0 auto;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    object-fit: contain;\n    object-position: center center;\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 1920px) and (max-width: 2559px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 600px;\n    width: 100%;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: center center;\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 1600px) and (max-width: 1919px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: center center;\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 1520px) and (max-width: 1599px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 480px;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: center center;\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 1200px) and (max-width: 1599px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n}\n@media (max-width: 1199px) and (min-width: 769px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .hero-prev[_ngcontent-%COMP%], .hero-next[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 18px;\n  }\n  .hero-prev[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .hero-next[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n  .dot[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSkE7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBT0Y7O0FBTEE7O0VBRUUsOEJBQUE7QUFRRjs7QUFOQTtFQUNFLFVBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBWUY7O0FBVkE7RUFDRSxvQ0FBQTtBQWFGOztBQVhBO0VBQ0UsaUJBQUE7QUFjRjs7QUFaQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQWVGO0VBYkE7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFlRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VBZUY7RUFiQTtJQUNFLGlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQWVGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsYUFBQTtFQWVGO0VBYkE7SUFDRSxpQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFlRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGFBQUE7RUFlRjtFQWJBO0lBQ0UsaUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0U7SUFDRSxhQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0U7SUFDRSxhQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0U7SUFDRSxhQUFBO0VBZUY7RUFiQTs7SUFFRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFlRjtFQWJBO0lBQ0UsVUFBQTtFQWVGO0VBYkE7SUFDRSxXQUFBO0VBZUY7RUFiQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBZUY7QUFDRiIsImZpbGUiOiJoZXJvLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmhlcm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzZiMmYzMCAhaW1wb3J0YW50O1xufVxuLmhlcm8tc2xpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvLXNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlLWluLW91dDtcbn1cbi5oZXJvLXNsaWRlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVyby1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlcm8tcHJldixcbi5oZXJvLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi5oZXJvLXByZXY6aG92ZXIsXG4uaGVyby1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmhlcm8tcHJldiB7XG4gIGxlZnQ6IDIwcHg7XG59XG4uaGVyby1uZXh0IHtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uaGVyby1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLmRvdCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLmRvdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuaGVyby1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVyby1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAuaGVyby1zbGlkZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgLmhlcm8taW1hZ2Uge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTIwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLmhlcm8tc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICB9XG4gIC5oZXJvLWltYWdlIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAuaGVyby1wcmV2LFxuICAuaGVyby1uZXh0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5oZXJvLXByZXYge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgLmhlcm8tbmV4dCB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmRvdCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvZHNwYWNlL2FwcC9oZXJvLWJhbm5lci9oZXJvLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQU9GOztBQUxBOztFQUVFLDhCQUFBO0FBUUY7O0FBTkE7RUFDRSxVQUFBO0FBU0Y7O0FBUEE7RUFDRSxXQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQVlGOztBQVZBO0VBQ0Usb0NBQUE7QUFhRjs7QUFYQTtFQUNFLGlCQUFBO0FBY0Y7O0FBWkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFlRjtFQWJBO0lBQ0UsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQWVGO0VBYkE7SUFDRSxpQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFlRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGFBQUE7RUFlRjtFQWJBO0lBQ0UsaUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0U7SUFDRSxhQUFBO0VBZUY7RUFiQTtJQUNFLGlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQWVGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsYUFBQTtFQWVGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsYUFBQTtFQWVGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsYUFBQTtFQWVGO0VBYkE7O0lBRUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBZUY7RUFiQTtJQUNFLFVBQUE7RUFlRjtFQWJBO0lBQ0UsV0FBQTtFQWVGO0VBYkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQWVGO0FBQ0Y7QUFDQSx3bU1BQXdtTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmhlcm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzZiMmYzMCAhaW1wb3J0YW50O1xufVxuLmhlcm8tc2xpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvLXNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlLWluLW91dDtcbn1cbi5oZXJvLXNsaWRlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVyby1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlcm8tcHJldixcbi5oZXJvLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi5oZXJvLXByZXY6aG92ZXIsXG4uaGVyby1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmhlcm8tcHJldiB7XG4gIGxlZnQ6IDIwcHg7XG59XG4uaGVyby1uZXh0IHtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uaGVyby1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLmRvdCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLmRvdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuaGVyby1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVyby1pbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAuaGVyby1zbGlkZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgLmhlcm8taW1hZ2Uge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTIwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLmhlcm8tc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICB9XG4gIC5oZXJvLWltYWdlIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXNsaWRlciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAuaGVyby1wcmV2LFxuICAuaGVyby1uZXh0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5oZXJvLXByZXYge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgLmhlcm8tbmV4dCB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmRvdCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 14994:
/*!****************************************************************!*\
  !*** ./src/themes/dspace/app/home-page/home-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _app_core_browse_browse_definition_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/core/browse/browse-definition-data.service */ 42673);
/* harmony import */ var _app_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/core/shared/operators */ 55757);
/* harmony import */ var _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/home-page/home-page.component */ 6792);
/* harmony import */ var _app_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/search-page/themed-configuration-search-page.component */ 4021);
/* harmony import */ var _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _app_notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/notifications/suggestions-popup/suggestions-popup.component */ 95939);
/* harmony import */ var _app_home_page_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/home-page/home-news/themed-home-news.component */ 34234);
/* harmony import */ var _hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hero-banner/hero-banner.component */ 30354);
/* harmony import */ var _shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/search-form/search-form.component */ 51742);
/* harmony import */ var _top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-level-community-list/top-level-community-list.component */ 49076);

















function HomePageComponent_ds_configuration_search_page_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0, 20);
  }
}
function HomePageComponent_ds_configuration_search_page_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-configuration-search-page", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePageComponent_ds_configuration_search_page_46_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const homeContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("sideBarWidth", 3)("showViewModes", false)("searchEnabled", false)("inPlaceSearch", false)("showScopeSelector", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r2);
  }
}
function HomePageComponent_div_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function HomePageComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePageComponent_div_47_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const homeContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r2);
  }
}
function HomePageComponent_ng_template_49_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-view-tracker", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const site_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("object", site_r3);
  }
}
function HomePageComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, HomePageComponent_ng_template_49_ng_container_0_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ds-search-form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ds-top-level-community-list");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r3.site$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inPlaceSearch", false)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, "home.search-form.placeholder"));
  }
}
class HomePageComponent extends _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent {
  constructor() {
    super(...arguments);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router);
    this.browseDefinitionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_app_core_browse_browse_definition_data_service__WEBPACK_IMPORTED_MODULE_0__.BrowseDefinitionDataService);
  }
  /**
   * Navigate to browse page with fallback to search
   * @param browseType The browse type (author, title, subject, etc.)
   */
  navigateToBrowse(browseType) {
    // First try to check if browse definition exists
    this.browseDefinitionService.findById(browseType).pipe((0,_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(browseDefinitionRD => {
      if (browseDefinitionRD.hasSucceeded && browseDefinitionRD.payload) {
        // Browse definition exists, navigate to browse page
        this.router.navigate(['/browse', browseType]);
      } else {
        // Browse definition doesn't exist, fallback to search with filter
        this.navigateToSearchFallback(browseType);
      }
    });
  }
  /**
   * Fallback navigation to search page with appropriate filter
   * @param browseType The browse type to convert to search filter
   */
  navigateToSearchFallback(browseType) {
    const filterMap = {
      'author': 'author',
      'title': 'title',
      'subject': 'subject',
      'language': 'language',
      'media': 'type',
      'linguistictype': 'type'
    };
    const filterField = filterMap[browseType] || browseType;
    // Navigate to search page with filter
    this.router.navigate(['/search'], {
      queryParams: {
        [`f.${filterField}`]: '',
        'view': 'list'
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHomePageComponent_BaseFactory;
      return function HomePageComponent_Factory(t) {
        return (ɵHomePageComponent_BaseFactory || (ɵHomePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](HomePageComponent)))(t || HomePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["ds-themed-home-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 51,
      vars: 38,
      consts: [["homeContent", ""], [1, "top-border"], [1, "bottom-border"], [1, "main-background-section"], [1, "browse-categories-section"], [1, "container"], [1, "row"], [1, "col-12"], [1, "browse-categories"], [1, "browse-item", 3, "click"], ["src", "assets/tholkudi-assets/category-icons/browse-author.png", 3, "alt"], ["src", "assets/tholkudi-assets/category-icons/browse-title.png", 3, "alt"], ["src", "assets/tholkudi-assets/category-icons/browse-subject.png", 3, "alt"], ["src", "assets/tholkudi-assets/category-icons/browse-language.png", 3, "alt"], ["src", "assets/tholkudi-assets/category-icons/browse-media.png", 3, "alt"], ["src", "assets/tholkudi-assets/category-icons/browse-linguistic.png", 3, "alt"], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector", 4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector"], ["searchContentTop", "", 4, "ngTemplateOutlet"], ["searchContentTop", ""], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "inPlaceSearch", "searchPlaceholder"], [3, "object"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-hero-banner")(1, "div", 1)(2, "ds-home-news")(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3)(5, "section", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("author"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("title"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("subject"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("language"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("media"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.navigateToBrowse("linguistictype"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, HomePageComponent_ds_configuration_search_page_46_Template, 2, 6, "ds-configuration-search-page", 16)(47, HomePageComponent_div_47_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "ds-suggestions-popup");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, HomePageComponent_ng_template_49_Template, 5, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 14, "browse.comcol.by.author"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 16, "browse.comcol.by.author"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 18, "browse.comcol.by.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 20, "browse.comcol.by.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 22, "browse.comcol.by.subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 24, "browse.comcol.by.subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 26, "browse.comcol.by.language"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 28, "browse.comcol.by.language"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 30, "browse.comcol.by.media"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 32, "browse.comcol.by.media"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 34, "browse.comcol.by.linguistictype"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](45, 36, "browse.comcol.by.linguistictype"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showDiscoverFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showDiscoverFilters);
        }
      },
      dependencies: [_hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_7__.HeroBannerComponent, _app_home_page_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_6__.ThemedHomeNewsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_4__.ViewTrackerComponent, _shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_8__.SearchFormComponent, _top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_9__.TopLevelCommunityListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _app_notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_5__.SuggestionsPopupComponent, _app_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_3__.ThemedConfigurationSearchPageComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  background-color: #f8f4ec;\n  margin: 0 !important;\n  padding: 0 !important;\n  display: block;\n  width: 100%;\n}\n\n  .my-cs {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n}\n\n  .my-cs.ng-tns-c2190221462-0 {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n}\n\n  main {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n}\n\nds-hero-banner[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 4px;\n  background-color: #eca43c;\n  width: 100%;\n  margin: 0;\n}\n\n.bottom-border[_ngcontent-%COMP%] {\n  height: 4px;\n  background-color: #6c2c34;\n  width: 100%;\n  margin: 0;\n}\n\n.main-background-section[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/tholkudi-assets/background-images/main-background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.main-background-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.browse-categories-section[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 3rem 0 0 0;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: #333;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  flex: 1;\n  min-width: 120px;\n  max-width: 150px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  opacity: 0.8;\n  text-decoration: none;\n  color: #8b3e1f;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #2b4878;\n  outline-offset: 2px;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  margin-bottom: 0.8rem;\n  transition: transform 0.3s ease;\n  pointer-events: none;\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 400;\n  text-align: center;\n  line-height: 1.3;\n  color: #a64e26;\n}\n\n@media (max-width: 992px) {\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 1.5rem;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%] {\n    flex: 0 0 calc(33.333% - 1rem);\n    max-width: 140px;\n  }\n}\n@media (max-width: 768px) {\n  .browse-categories-section[_ngcontent-%COMP%] {\n    padding: 2rem 0 1.5rem 0;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 0.5rem);\n    max-width: 120px;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%] {\n    flex: 0 0 calc(33.333% - 0.5rem);\n    max-width: 100px;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  .browse-categories-section[_ngcontent-%COMP%]   .browse-categories[_ngcontent-%COMP%]   .browse-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important;\n}\n\nds-search-form[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 767px) {\n  ds-search-form[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n}\nds-top-level-community-list[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nds-home-news[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n  .my-cs {\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n  main {\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n  .page-content {\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n[_nghost-%COMP%] {\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-bottom: 0 !important;\n    margin-bottom: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQU9GOztBQUxBO0VBQ0Usc0ZBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFTRjs7QUFQQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFZRjs7QUFWQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVhBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQWNGOztBQVpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQWVGOztBQWJBO0VBQ0UscUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBZkE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsV0FBQTtFQWtCRjtFQWhCQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUFrQkY7QUFDRjtBQWhCQTtFQUNFO0lBQ0Usd0JBQUE7RUFrQkY7RUFoQkE7SUFDRSxTQUFBO0VBa0JGO0VBaEJBO0lBQ0UsNEJBQUE7SUFDQSxnQkFBQTtFQWtCRjtFQWhCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBa0JGO0VBaEJBO0lBQ0UsaUJBQUE7RUFrQkY7QUFDRjtBQWhCQTtFQUNFO0lBQ0UsZ0NBQUE7SUFDQSxnQkFBQTtFQWtCRjtFQWhCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBa0JGO0VBaEJBO0lBQ0Usa0JBQUE7RUFrQkY7QUFDRjtBQWhCQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFtQkY7O0FBakJBO0VBQ0U7SUFDRSxxQkFBQTtFQW9CRjtBQUNGO0FBbEJBO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQXNCRjs7QUFwQkE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBdUJGOztBQXJCQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQXlCRjs7QUF2QkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VBMEJGO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjRlYztcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5teS1jcyB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubXktY3MubmctdG5zLWMyMTkwMjIxNDYyLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWFpbiB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbmRzLWhlcm8tYmFubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4udG9wLWJvcmRlciB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNhNDNjO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbS1ib3JkZXIge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjMmMzNDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbi5tYWluLWJhY2tncm91bmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGhvbGt1ZGktYXNzZXRzL2JhY2tncm91bmQtaW1hZ2VzL21haW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5tYWluLWJhY2tncm91bmQtc2VjdGlvbiA+ICoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xufVxuLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4YjNlMWY7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMyYjQ4Nzg7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjYTY0ZTI2O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbiAgLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIC5icm93c2UtaXRlbSB7XG4gICAgZmxleDogMCAwIGNhbGMoMzMuMzMzJSAtIDFyZW0pO1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbSAwIDEuNXJlbSAwO1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCBjYWxjKDUwJSAtIDAuNXJlbSk7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIHtcbiAgICBmbGV4OiAwIDAgY2FsYygzMy4zMzMlIC0gMC41cmVtKTtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbiAgLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIC5icm93c2UtaXRlbSBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuZHMtc2VhcmNoLWZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBkcy1zZWFyY2gtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG5kcy10b3AtbGV2ZWwtY29tbXVuaXR5LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuZHMtaG9tZS1uZXdzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubXktY3Mge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuOmhvc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvZHNwYWNlL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBT0Y7O0FBTEE7RUFDRSxzRkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVNGOztBQVBBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVlGOztBQVZBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0FBZUY7O0FBYkE7RUFDRSxxQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFmQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxXQUFBO0VBa0JGO0VBaEJBO0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtFQWtCRjtBQUNGO0FBaEJBO0VBQ0U7SUFDRSx3QkFBQTtFQWtCRjtFQWhCQTtJQUNFLFNBQUE7RUFrQkY7RUFoQkE7SUFDRSw0QkFBQTtJQUNBLGdCQUFBO0VBa0JGO0VBaEJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFrQkY7RUFoQkE7SUFDRSxpQkFBQTtFQWtCRjtBQUNGO0FBaEJBO0VBQ0U7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0VBa0JGO0VBaEJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFrQkY7RUFoQkE7SUFDRSxrQkFBQTtFQWtCRjtBQUNGO0FBaEJBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQW1CRjs7QUFqQkE7RUFDRTtJQUNFLHFCQUFBO0VBb0JGO0FBQ0Y7QUFsQkE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQXFCRjs7QUFuQkE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBc0JGOztBQXBCQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUF1QkY7O0FBckJBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQXdCRjs7QUF0QkE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBeUJGOztBQXZCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7RUEwQkY7QUFDRjtBQUNBLDR3UkFBNHdSIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjRlYztcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5teS1jcyB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubXktY3MubmctdG5zLWMyMTkwMjIxNDYyLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWFpbiB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbmRzLWhlcm8tYmFubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4udG9wLWJvcmRlciB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNhNDNjO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbS1ib3JkZXIge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjMmMzNDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbi5tYWluLWJhY2tncm91bmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGhvbGt1ZGktYXNzZXRzL2JhY2tncm91bmQtaW1hZ2VzL21haW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5tYWluLWJhY2tncm91bmQtc2VjdGlvbiA+ICoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xufVxuLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4YjNlMWY7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMyYjQ4Nzg7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjYTY0ZTI2O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbiAgLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIC5icm93c2UtaXRlbSB7XG4gICAgZmxleDogMCAwIGNhbGMoMzMuMzMzJSAtIDFyZW0pO1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbSAwIDEuNXJlbSAwO1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCBjYWxjKDUwJSAtIDAuNXJlbSk7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYnJvd3NlLWNhdGVnb3JpZXMtc2VjdGlvbiAuYnJvd3NlLWNhdGVnb3JpZXMgLmJyb3dzZS1pdGVtIHtcbiAgICBmbGV4OiAwIDAgY2FsYygzMy4zMzMlIC0gMC41cmVtKTtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5icm93c2UtY2F0ZWdvcmllcy1zZWN0aW9uIC5icm93c2UtY2F0ZWdvcmllcyAuYnJvd3NlLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbiAgLmJyb3dzZS1jYXRlZ29yaWVzLXNlY3Rpb24gLmJyb3dzZS1jYXRlZ29yaWVzIC5icm93c2UtaXRlbSBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuZHMtc2VhcmNoLWZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBkcy1zZWFyY2gtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG5kcy10b3AtbGV2ZWwtY29tbXVuaXR5LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuZHMtaG9tZS1uZXdzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubXktY3Mge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuOmhvc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_dspace_app_home-page_home-page_component_ts.js.map