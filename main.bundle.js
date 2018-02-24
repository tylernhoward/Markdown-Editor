webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml {\n  height: 100%;\n}\n\n#app {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  background-color: white;\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n}\n\n.text-form {\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height:100%;\n}\n\n.header {\n  width: 100%;\n  background-color: whitesmoke;\n  padding: 10px;\n  border-bottom: 1px solid lightgrey;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">  \n      <header class=\"header\">\n        <app-header></app-header>\n      </header>\n      <div class=\"content\">\n        <div class=\"text-form\">\n          <app-text-form></app-text-form>\n        </div>\n      </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_tui_editor__ = __webpack_require__("../../../../ngx-tui-editor/ngx-tui-editor.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_tui_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_tui_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__text_editor_text_editor_component__ = __webpack_require__("../../../../../src/app/text-editor/text-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__control_buttons_control_buttons_component__ = __webpack_require__("../../../../../src/app/control-buttons/control-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_value_updater_service__ = __webpack_require__("../../../../../src/app/services/value-updater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_pending_changes_guard__ = __webpack_require__("../../../../../src/app/services/pending-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__help_modal_help_modal_component__ = __webpack_require__("../../../../../src/app/help-modal/help-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text_form_text_form_component__ = __webpack_require__("../../../../../src/app/text-form/text-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__text_editor_text_editor_component__["a" /* TextEditorComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_12__services_pending_changes_guard__["a" /* PendingChangesGuard */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__text_editor_text_editor_component__["a" /* TextEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__control_buttons_control_buttons_component__["a" /* ControlButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__help_modal_help_modal_component__["a" /* HelpModalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__text_form_text_form_component__["a" /* TextFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_tui_editor__["TuiModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_0_ngx_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_value_updater_service__["a" /* ValueUpdaterService */], __WEBPACK_IMPORTED_MODULE_12__services_pending_changes_guard__["a" /* PendingChangesGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/control-buttons/control-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .icon-button:hover {\n   color: gray;\n }\n\n .icon-button:active {\n   color: #4b96e6;\n\n\n }\n\n .list-button{\n     border: gray solid 2px;\n     padding:5px;\n     margin-bottom: 5px;\n }\n\n .list-button:hover {\n    background-color: whitesmoke;\n    border: #4b96e6 solid 2px;\n\n  }\n\n .list-button:active {\n     background-color: lightgray;\n     border: #4b96e6 solid 2px;\n   }\n\n .buttons {\n    font-size: 18pt;\n    width:auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n .buttons .icon-button {\n    margin-right: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control-buttons/control-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\">\n  <div [popover]=\"previewPopover\" class=\"icon-button\">\n    <i class=\"fas fa-eye\"></i>\n    <a #previewer target=\"_blank\"></a>\n  </div>\n  <div [popover]=\"savePopover\" class=\"icon-button\">\n    <i class=\"fas fa-save\"></i>\n    <a #downloader></a>\n  </div>\n  <div class=\"icon-button\" (click)=\"showHelp = true\">\n    <i class=\"fas fa-question\"></i>\n  </div>\n  <div [popover]=\"settingsPopover\" class=\"icon-button\">\n      <i class=\"fas fa-cog\"></i>\n  </div>\n\n  <app-help-modal *ngIf=\"showHelp\" (onClose)=\"onHelpClose($event)\"></app-help-modal>\n\n  <popover-content #savePopover title=\"Save file\" placement=\"bottom\" [animation]=\"true\" [closeOnClickOutside]=\"true\">\n      <div class=\"list-button\" (click)=\"save('markdown')\"><i class=\"fas fa-download\"></i>&nbsp;Markdown</div>\n      <div class=\"list-button\" (click)=\"save('html')\"><i class=\"fas fa-download\"></i>&nbsp;HTML</div>\n  </popover-content>\n\n  <popover-content #previewPopover title=\"Preview file\" placement=\"bottom\" [animation]=\"true\" [closeOnClickOutside]=\"true\">\n      <div class=\"list-button\" (click)=\"preview('markdown')\"><i class=\"fas fa-external-link-alt\"></i>&nbsp;Markdown</div>\n      <div class=\"list-button\" (click)=\"preview('html')\" ><i class = \"fas fa-external-link-alt\"></i>&nbsp;HTML</div>\n  </popover-content>\n\n    <popover-content #settingsPopover title=\"Settings\" placement=\"bottom\" [animation]=\"true\" [closeOnClickOutside]=\"true\">\n      <p>Coming soon..</p>\n    </popover-content>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/control-buttons/control-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_value_updater_service__ = __webpack_require__("../../../../../src/app/services/value-updater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__ = __webpack_require__("../../../../ngx-tui-editor/ngx-tui-editor.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlButtonsComponent = /** @class */ (function () {
    function ControlButtonsComponent(editorService, valueUpdater) {
        this.editorService = editorService;
        this.valueUpdater = valueUpdater;
        this.textURI = null;
    }
    ControlButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showHelp = false;
        this.fileName = "Readme";
        this.valueUpdater.nameObservable.subscribe(function (value) {
            _this.fileName = value;
        });
    };
    ControlButtonsComponent.prototype.onHelpClose = function (event) {
        this.showHelp = false;
    };
    ControlButtonsComponent.prototype.openSettings = function () {
    };
    ControlButtonsComponent.prototype.save = function (type) {
        this.addExtension(type);
        this.createFile(type);
        this.downloadFile();
    };
    ControlButtonsComponent.prototype.preview = function (type) {
        this.createFile(type);
        this.previewFile();
    };
    ControlButtonsComponent.prototype.addExtension = function (type) {
        this.fileName = this.fileName.split(".")[0];
        this.filePath = "";
        switch (type) {
            case "html":
                this.filePath = this.fileName + ".html";
                break;
            case "markdown":
                this.filePath = this.fileName + ".md";
                break;
            default: this.filePath = this.fileName + ".md";
        }
    };
    ControlButtonsComponent.prototype.createFile = function (type) {
        var content = (type === "markdown" ? this.editorService.getMarkdown() : this.editorService.getHtml());
        var textBlob = new Blob([content], { type: 'text/plain' });
        this.textURI = URL.createObjectURL(textBlob);
    };
    ControlButtonsComponent.prototype.downloadFile = function () {
        this.downloader.nativeElement.href = this.textURI;
        this.downloader.nativeElement.download = this.filePath;
        this.downloader.nativeElement.click();
    };
    ControlButtonsComponent.prototype.previewFile = function () {
        this.previewer.nativeElement.href = this.textURI;
        this.previewer.nativeElement.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('downloader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], ControlButtonsComponent.prototype, "downloader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('previewer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], ControlButtonsComponent.prototype, "previewer", void 0);
    ControlButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-control-buttons',
            template: __webpack_require__("../../../../../src/app/control-buttons/control-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/control-buttons/control-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__["TuiService"], __WEBPACK_IMPORTED_MODULE_0__services_value_updater_service__["a" /* ValueUpdaterService */]])
    ], ControlButtonsComponent);
    return ControlButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: "<div class=\"wrapper\">\n                <h4>WriteMeDown</h4>\n                <app-control-buttons></app-control-buttons>\n              </div>",
            styles: [".wrapper{\n                display: flex;\n                flex-direction: row;\n                margin-left:40px;\n                justify-content: space-between;\n            }\n            h4 {\n                font-size: 16pt;\n                letter-spacing: 4px;\n            }"]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help-modal/help-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-title{\n    letter-spacing: 4px;\n    font-size: 16pt;\n}\n.modal-text,.modal-text a{\n    text-decoration: none;\n    font-style: normal;\n    font-weight: lighter;\n    font-size: 12pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-modal/help-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<a #launcher (click)=\"helpModal.open()\"></a>\n<modal #helpModal (onClose)=\"close()\" modalClass=\"modal-lg\">\n  <modal-header>\n    <h1 class=\"modal-title\">Markdown Guide</h1>\n  </modal-header>\n  <modal-content>\n      <pdf-viewer class=\"viewer\" [src]=\"pdfSrc\" [render-text]=\"true\" style=\"display: block;\"></pdf-viewer>\n  </modal-content>\n  <modal-footer class =\"modal-text\">\n    Retrieved from <a href=\"https://guides.github.com/features/mastering-markdown/\" target=\"_blank\">Github Guides</a>\n  </modal-footer>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/help-modal/help-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpModalComponent = /** @class */ (function () {
    function HelpModalComponent() {
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HelpModalComponent.prototype.ngAfterViewInit = function () {
        this.launcher.nativeElement.click();
    };
    HelpModalComponent.prototype.ngOnInit = function () {
        this.pdfSrc = "https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf";
    };
    HelpModalComponent.prototype.close = function () {
        this.onClose.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('launcher'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HelpModalComponent.prototype, "launcher", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HelpModalComponent.prototype, "onClose", void 0);
    HelpModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-modal',
            template: __webpack_require__("../../../../../src/app/help-modal/help-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-modal/help-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpModalComponent);
    return HelpModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/pending-changes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingChangesGuard; });
var PendingChangesGuard = /** @class */ (function () {
    function PendingChangesGuard() {
    }
    PendingChangesGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate() ?
            true : confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.');
    };
    return PendingChangesGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/value-updater.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueUpdaterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueUpdaterService = /** @class */ (function () {
    function ValueUpdaterService() {
        this.nameObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.textObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ValueUpdaterService.prototype.emitName = function (val) {
        this.nameObservable.next(val);
    };
    ValueUpdaterService.prototype.emitText = function (val) {
        this.textObservable.next(val);
    };
    ValueUpdaterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValueUpdaterService);
    return ValueUpdaterService;
}());



/***/ }),

/***/ "../../../../../src/app/text-editor/initialText.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialText; });
var initialText = "# Welcome to WriteMeDown!\n> ###### Write READMEs in Markdown\n* * *\nWriteMeDown is a WYSIWYG markdown editor written in Angular and inspired by [Dillinger](https://dillinger.io).\n\n## Getting Started\nCreate your markdown files (~~READMEs~~) for use anywhere (~~GitHub~~) with ease!\n1. Name your file\n2. Edit text in editor\n3. Fine tune in WYSIWYG mode\n4. Save file to disk\n\n### Extra Help\nUnfamiliar with Markdown?\n* There are buttons in toolbar for easy formatting.\n* Go into **WYSIWYG** mode at the bottom right\n* Click the **?** button for markdown help from GitHub Guides.\n* * *\n\n### Built With:\n[![ToastEditorLogo](https://cloud.githubusercontent.com/assets/389021/16107646/9729e556-33d8-11e6-933f-5b09fa3a53bb.png)](https://nhnent.github.io/tui.editor/)\n";


/***/ }),

/***/ "../../../../../src/app/text-editor/text-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-pane {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.editor {\n  min-height: 100%;\n  width: 99.5%;\n  -webkit-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/text-editor/text-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-pane\">\n  <tui-editor #editor class=\"editor\" [options]=\"options\"></tui-editor>\n</div>"

/***/ }),

/***/ "../../../../../src/app/text-editor/text-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialText__ = __webpack_require__("../../../../../src/app/text-editor/initialText.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__ = __webpack_require__("../../../../ngx-tui-editor/ngx-tui-editor.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value_updater_service__ = __webpack_require__("../../../../../src/app/services/value-updater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent(editorService, valueUpdater) {
        this.editorService = editorService;
        this.valueUpdater = valueUpdater;
    }
    TextEditorComponent.prototype.ngOnInit = function () {
        this.height = window.innerHeight - 150;
        this.options = {
            initialValue: this.text ? this.text : __WEBPACK_IMPORTED_MODULE_0__initialText__["a" /* initialText */],
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: this.height
        };
    };
    TextEditorComponent.prototype.ngAfterViewInit = function () {
        //this.editor.nativeElement.click()
    };
    TextEditorComponent.prototype.ngOnDestroy = function () {
        console.log(this.editorService.getMarkdown());
        this.valueUpdater.emitText(this.editorService.getMarkdown());
    };
    TextEditorComponent.prototype.canDeactivate = function () {
        if (this.editorService.getMarkdown() === this.options["initialValue"]) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("editor"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], TextEditorComponent.prototype, "editor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TextEditorComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], TextEditorComponent.prototype, "canDeactivate", null);
    TextEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-text-editor',
            template: __webpack_require__("../../../../../src/app/text-editor/text-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/text-editor/text-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_tui_editor__["TuiService"], __WEBPACK_IMPORTED_MODULE_2__services_value_updater_service__["a" /* ValueUpdaterService */]])
    ], TextEditorComponent);
    return TextEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/text-form/text-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-form input {\n  border: 0;\n  border-bottom: 2px solid #4b96e6;\n  font-size: 22px;\n  line-height: 30px;\n  height: 50px;\n  text-align: center;\n  background: transparent;\n  color: #4b96e6;\n}\n\n.file-form input:focus {\n  outline: 0;\n  color: #4b96e6;\n  border-bottom: 2px solid #4b96e6;\n}\n\n.file-form small {\n    font-weight: lighter;\n}\n\n.file-form {\n  margin-left:50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 15px;\n  padding-top:10px;\n  width: 20%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/text-form/text-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"file-form\">\n  <small>Name:</small>\n  <input type=\"text\" [(ngModel)]=\"fileName\" (input)=\"updateFileName($event)\" />\n</div>\n<app-text-editor *ngIf=\"editorShown\" [text]=\"text\"></app-text-editor>\n"

/***/ }),

/***/ "../../../../../src/app/text-form/text-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_value_updater_service__ = __webpack_require__("../../../../../src/app/services/value-updater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextFormComponent = /** @class */ (function () {
    function TextFormComponent(valueUpdater) {
        var _this = this;
        this.valueUpdater = valueUpdater;
        this.valueUpdater.textObservable.subscribe(function (value) {
            _this.text = value;
        });
    }
    TextFormComponent.prototype.ngOnInit = function () {
        this.fileName = "README";
        this.editorShown = true;
    };
    TextFormComponent.prototype.reInitializeEditor = function (event) {
        var _this = this;
        this.editorShown = false;
        setTimeout(function () {
            _this.editorShown = true;
        }, 1);
    };
    TextFormComponent.prototype.updateFileName = function (event) {
        this.valueUpdater.emitName(this.fileName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TextFormComponent.prototype, "reInitializeEditor", null);
    TextFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-text-form',
            template: __webpack_require__("../../../../../src/app/text-form/text-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/text-form/text-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_value_updater_service__["a" /* ValueUpdaterService */]])
    ], TextFormComponent);
    return TextFormComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map