"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_community-list-page_community-list_community-list_component_ts"],{

/***/ 41658:
/*!**********************************************************************************************!*\
  !*** ./src/themes/custom/app/community-list-page/community-list/community-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListComponent: () => (/* binding */ CommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 90772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_community_list_page_community_list_community_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/community-list-page/community-list/community-list.component */ 57457);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);











const _c0 = a0 => ({
  name: a0
});
function CommunityListComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-loading", 5);
  }
}
function CommunityListComponent_cdk_tree_node_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommunityListComponent_cdk_tree_node_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.getNextPage(node_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "communityList.showMore"), " ");
  }
}
function CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-loading", 5);
  }
}
function CommunityListComponent_cdk_tree_node_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-tree-node", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommunityListComponent_cdk_tree_node_3_button_5_Template, 4, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template, 1, 0, "ds-loading", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, ctx_r2.dataSource.loading$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, node_r2 === ctx_r2.loadingNode && ctx_r2.dataSource.loading$));
  }
}
function CommunityListComponent_cdk_tree_node_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommunityListComponent_cdk_tree_node_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleExpanded(node_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 5, node_r5.isExpanded ? "communityList.collapse" : "communityList.expand", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx_r2.dsoNameService.getName(node_r5.payload))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](node_r5.isExpanded ? "fa fa-chevron-down" : "fa fa-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 8, node_r5.isExpanded ? "communityList.collapse" : "communityList.expand", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx_r2.dsoNameService.getName(node_r5.payload))));
  }
}
function CommunityListComponent_cdk_tree_node_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CommunityListComponent_cdk_tree_node_4_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r5.payload.archivedItemsCount);
  }
}
function CommunityListComponent_cdk_tree_node_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ds-truncatable-part", 32)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", node_r5.id)("minLines", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r5.payload.shortDescription);
  }
}
function CommunityListComponent_cdk_tree_node_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ds-loading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CommunityListComponent_cdk_tree_node_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-tree-node", 16)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CommunityListComponent_cdk_tree_node_4_button_2_Template, 6, 15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommunityListComponent_cdk_tree_node_4_span_4_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 19)(7, "span", 20)(8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CommunityListComponent_cdk_tree_node_4_span_12_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ds-truncatable", 24)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CommunityListComponent_cdk_tree_node_4_div_15_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CommunityListComponent_cdk_tree_node_4_div_16_Template, 4, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, ctx_r2.hasChild(null, node_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 10, ctx_r2.hasChild(null, node_r5)) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", node_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(node_r5.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", node_r5.payload.archivedItemsCount >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", node_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", node_r5.payload.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 12, node_r5 === ctx_r2.loadingNode && ctx_r2.dataSource.loading$));
  }
}
function CommunityListComponent_cdk_tree_node_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ds-truncatable-part", 32)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", node_r6.id)("minLines", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r6.payload.shortDescription);
  }
}
function CommunityListComponent_cdk_tree_node_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-tree-node", 34)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h6", 10)(5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ds-truncatable", 24)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CommunityListComponent_cdk_tree_node_5_div_9_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", node_r6.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(node_r6.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", node_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", node_r6.payload.shortDescription);
  }
}
/**
 * A tree-structured list of nodes representing the communities, their subCommunities and collections.
 * Initially only the page-restricted top communities are shown.
 * Each node can be expanded to show its children and all children are also page-limited.
 * More pages of a page-limited result can be shown by pressing a show more node/link.
 * Which nodes were expanded is kept in the store, so this persists across pages.
 */
class CommunityListComponent extends _app_community_list_page_community_list_community_list_component__WEBPACK_IMPORTED_MODULE_0__.CommunityListComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCommunityListComponent_BaseFactory;
      return function CommunityListComponent_Factory(t) {
        return (ɵCommunityListComponent_BaseFactory || (ɵCommunityListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](CommunityListComponent)))(t || CommunityListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CommunityListComponent,
      selectors: [["ds-themed-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 9,
      consts: [["class", "ds-themed-loading", 4, "ngIf"], [3, "dataSource", "treeControl", "trackBy"], ["cdkTreeNodePadding", "", "class", "example-tree-node show-more-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", "class", "example-tree-node expandable-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", "class", "example-tree-node childless-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "ds-themed-loading"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "show-more-node"], [1, "btn-group"], ["aria-hidden", "true", "cdkTreeNodeToggle", "", 1, "btn", "btn-default", "invisible"], [1, "fa", "fa-chevron-right"], [1, "align-middle", "my-auto"], ["class", "btn btn-outline-primary btn-sm", "role", "button", 3, "click", 4, "ngIf"], ["cdkTreeNodePadding", "", 1, "text-muted"], [1, "d-flex"], ["role", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-angle-down"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "expandable-node"], ["type", "button", "class", "btn btn-default", "cdkTreeNodeToggle", "", "data-test", "expand-button", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "class", "btn btn-default invisible", 4, "ngIf"], [1, "d-flex", "flex-row"], [1, "d-flex", "align-middle", "my-auto"], [1, "lead", 3, "routerLink"], [1, "pr-2"], ["class", "badge badge-pill badge-secondary align-top archived-items-lead my-auto", 4, "ngIf"], [3, "id"], ["class", "d-flex", 4, "ngIf"], ["class", "d-flex", "cdkTreeNodePadding", "", 4, "ngIf"], ["type", "button", "cdkTreeNodeToggle", "", "data-test", "expand-button", 1, "btn", "btn-default", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["aria-hidden", "true", 1, "btn", "btn-default", "invisible"], [1, "badge", "badge-pill", "badge-secondary", "align-top", "archived-items-lead", "my-auto"], [3, "id", "minLines"], ["cdkTreeNodePadding", "", 1, "d-flex"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "childless-node"]],
      template: function CommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CommunityListComponent_ds_loading_0_Template, 1, 0, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "cdk-tree", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommunityListComponent_cdk_tree_node_3_Template, 11, 6, "cdk-tree-node", 2)(4, CommunityListComponent_cdk_tree_node_4_Template, 18, 14, "cdk-tree-node", 3)(5, CommunityListComponent_cdk_tree_node_5_Template, 10, 4, "cdk-tree-node", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 7, ctx.dataSource.loading$) && !ctx.loadingNode);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl)("trackBy", ctx.trackBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.isShowMore);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTreeNodeDefWhen", !(ctx.hasChild && ctx.isShowMore));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeNodeDef, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeNodePadding, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeNodeToggle, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTree, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeNode, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_2__.TruncatableComponent, _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_3__.TruncatablePartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_community-list-page_community-list_community-list_component_ts.js.map