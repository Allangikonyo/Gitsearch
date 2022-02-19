(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/allangikonyo/Git-Clone/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_git_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/git.service */ "LSMM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");
/* harmony import */ var _components_repo_repo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/repo/repo.component */ "iCUM");







class HomeComponent {
    constructor(gitService, title, messageService) {
        this.gitService = gitService;
        this.title = title;
        this.messageService = messageService;
        this.search = () => {
            this.gitService.getGit(this.username).subscribe((respdata) => {
                this.responseData = respdata;
            }, (err) => {
                this.messageService.sendMessage("Unable to fetch data");
            });
        };
        this.title.setTitle("GitHub Clone");
    }
    ngOnInit() {
        $('.active').mouseleave();
        $('.active').mouseover();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_git_service__WEBPACK_IMPORTED_MODULE_1__["GitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "main"], [3, "ngSubmit"], [1, "searchBar"], ["type", "text", "placeholder", "GitHub Username", "name", "username", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "biSection"], [3, "userResp"], [3, "repoUrl"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_2_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-repo", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userResp", ctx.responseData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repoUrl", ctx.responseData == null ? null : ctx.responseData.repos_url);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _components_repo_repo_component__WEBPACK_IMPORTED_MODULE_6__["RepoComponent"]], styles: [".main[_ngcontent-%COMP%]\n{\n    text-align: center;\n    margin-top: 20px;\n}\n\n.searchBar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n    width:230px;\n    height:35px;\n    border:none;\n    outline:none;\n    border-radius: 20px 0px 0px 20px;\n    padding:0px 20px;\n    background: transparent;\n    border:2px solid white;\n    color:#fff;\n    text-align:center;\n}\n\n.searchBar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder\n{\n    color:#d7d6ff7a;\n}\n\n.searchBar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\n{\n    width:60px;\n    height:35px;\n    margin-left: -11px;\n    border:none;\n    outline:none;\n    border-radius: 0px 20px 20px 0px;\n    background:#ffffff;\n    color:#0e001b;\n    font-weight: 550;\n    cursor: pointer;\n}\n\n.biSection[_ngcontent-%COMP%]\n{\n    color:white;\n    display: flex;\n    justify-content: space-around;\n    width:100vw;\n    margin-top:50px;\n    flex-wrap: wrap;\n}\n\n@media screen and (max-width:400px) {\n\n    \n  \n.main[_ngcontent-%COMP%]\n{\n    text-align: center;\n    margin-top: 45px;\n}\n\n.searchBar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n    max-width:230px;\n    min-width: 150px;\n    width:80vw;\n  \n}\n\n\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFHQTs7OztBQUlBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkOzs7O0NBSUMiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpblxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VhcmNoQmFyIGlucHV0XG57XG4gICAgd2lkdGg6MjMwcHg7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xuICAgIHBhZGRpbmc6MHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc2VhcmNoQmFyIGlucHV0OjpwbGFjZWhvbGRlclxue1xuICAgIGNvbG9yOiNkN2Q2ZmY3YTtcbn1cbi5zZWFyY2hCYXIgYnV0dG9uXG57XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICBjb2xvcjojMGUwMDFiO1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmlTZWN0aW9uXG57XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB3aWR0aDoxMDB2dztcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpIHtcblxuICAgIFxuICBcbi5tYWluXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbi5zZWFyY2hCYXIgaW5wdXRcbntcbiAgICBtYXgtd2lkdGg6MjMwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDo4MHZ3O1xuICBcbn1cblxuXG5cbiB9Il19 */"] });


/***/ }),

/***/ "5j9j":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faTimes);
} }
class MessageComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.error = null;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"];
    }
    ngOnInit() {
        this.messageService.receiveMessage().subscribe((message) => {
            this.error = message;
        });
    }
    closeMessage() {
        this.error = null;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 1, vars: 1, consts: [["class", "message", "style", "animation:animsg 0.5s ease-in-out 1;", 4, "ngIf"], [1, "message", 2, "animation", "animsg 0.5s ease-in-out 1"], [1, "msg"], [1, "cls-msg", 3, "click"], [3, "icon"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".message[_ngcontent-%COMP%]{\n    position:absolute;\n    top:20px;\n    right:40px;\n    display:flex;\n    height:45px;\n    justify-content: space-between;\n    align-items: center;\n    padding:7px 20px;\n    color:#ffffff;\n    background: rgb(121, 0, 46);\n    min-width: 200px;\n    box-shadow: -2px 2px 13px 2px #000000;\n    transition: .5s ease-in-out;\n\n}\n\n.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\n{\n    margin-right: 4px;\n    padding:0px 20px;\n    text-align: center;\n    margin-bottom: 5px;    \n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    \n}\n\n.message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\n{\n    outline:none;\n    border:none;\n    color:#d86a6a;\n    background: transparent;\n    cursor:pointer;\n    font-size: 18px;\n    line-height: 100%;\n}\n\n@keyframes animsg {\n    from{\n        top: 0;\n    }\n    to{\n        top: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQywyQkFBMkI7O0FBRS9COztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0REFBNEQ7O0FBRWhFOztBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksTUFBTTtJQUNWO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZXNzYWdle1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIHJpZ2h0OjQwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6N3B4IDIwcHg7XG4gICAgY29sb3I6I2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIxLCAwLCA0Nik7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAxM3B4IDJweCAjMDAwMDAwO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblxufVxuXG4ubWVzc2FnZSBkaXZcbntcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nOjBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBcbn1cbi5tZXNzYWdlIGJ1dHRvblxue1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjb2xvcjojZDg2YTZhO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBhbmltc2cge1xuICAgIGZyb217XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCHNZPiDy6rfjAn0yp_XMWz09ubMi34gmo",
        authDomain: "githubclone-fc0de.firebaseapp.com",
        projectId: "githubclone-fc0de",
        storageBucket: "githubclone-fc0de.appspot.com",
        messagingSenderId: "870681229018",
        appId: "1:870681229018:web:9b76c2acf409b063b057e3"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(authService, router, messageService, title) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.title = title;
        this.handleLogin = (f) => {
            $('.btn-load').html("<div></div><div></div><div></div>");
            $('.btn-load').addClass('btn-load-anim');
            const { username, password } = f.form.value;
            this.authService.login(username, password)
                .then((res) => {
                this.router.navigateByUrl('');
            })
                .catch((err) => {
                this.messageService.sendMessage(err.message);
                $('.btn-load').html("Login");
            });
        };
        this.title.setTitle("Login | Github Clone");
    }
    ngOnInit() {
        $('.active').mouseleave();
        $('.active').mouseover();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 0, consts: [[1, "container"], ["method", "post", 3, "ngSubmit"], ["f", "ngForm"], [1, "wrapper"], ["for", "username"], ["id", "username", "ngModel", "", "name", "username"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password"], [1, "wrapper", "wrapper-submit"], ["type", "submit", 1, "btn-load"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.handleLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".container[_ngcontent-%COMP%]{\n    position: absolute;\n    top:35%;\n    left:50%;\n    padding:30px;\n    border-radius: 5px;\n    width:370px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    text-align: center;\n    transform: translate(-50%,-20%);\n    background: white;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\n{\n    font-size: 25px;\n    color:#000155;\n}\n\n.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    height:60px;  \n}\n\n.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    position: absolute;\n    top:5%;\n    font-size: 13px;\n    left:16%;\n    color:#acafe2e7;\n}\n\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\n    margin-top: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    position: absolute;\n    top:39%;\n    transition: .3s ease-in-out;\n    left:50%;\n    transform: translateX(-50%);\n    width:70%;\n    padding:5px 10px;\n    border:none;\n    outline:none;\n    border-bottom: 1px solid #010488;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\n    border-bottom: 1px solid #0a018546;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%]{\n    color:#5a0000;\n}\n\n.wrapper[_ngcontent-%COMP%]   .btn-load[_ngcontent-%COMP%]{\n    background:#110050;\n    border:1px solid transparent;\n    color:white;\n    border-radius: 2px;\n    cursor: pointer;\n    width:80px;\n    \n    \n    height:35px;\n    transition: .3s ease-in-out;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper-submit[_ngcontent-%COMP%]\n{\n    width:55%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .btn-load[_ngcontent-%COMP%]:hover{\n    background:#d6d6fa;\n    color:#110050;\n    border:1px solid #151c8b;\n    \n}\n\n@media screen and (max-width:400px) {\n   \n \n    .container[_ngcontent-%COMP%]\n    {\n        width:270px;\n    }\n \n    .wrapper-submit[_ngcontent-%COMP%]{\n        width:65%;\n    }\n \n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNERBQTREO0lBQzVELGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sZUFBZTtJQUNmLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTs7O0lBR1YsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3Qjs7QUFFNUI7O0FBR0E7OztJQUdJOztRQUVJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7O0NBR0giLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM1JTtcbiAgICBsZWZ0OjUwJTtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjM3MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjAlKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjojMDAwMTU1O1xufVxuLmNvbnRhaW5lciAud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OjYwcHg7ICBcbn1cblxuLndyYXBwZXIgbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1JTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGVmdDoxNiU7XG4gICAgY29sb3I6I2FjYWZlMmU3O1xufVxuLmNvbnRhaW5lciBmb3Jte1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi53cmFwcGVyIGlucHV0LC53cmFwcGVyIGJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM5JTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOjcwJTtcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAxMDQ4ODtcbn1cbi53cmFwcGVyIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGEwMTg1NDY7XG59XG4ud3JhcHBlciBpbnB1dDpmb2N1cyB+IGxhYmVse1xuICAgIGNvbG9yOiM1YTAwMDA7XG59XG5cblxuLndyYXBwZXIgLmJ0bi1sb2Fke1xuICAgIGJhY2tncm91bmQ6IzExMDA1MDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6ODBweDtcbiAgICBcbiAgICBcbiAgICBoZWlnaHQ6MzVweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyLXN1Ym1pdFxue1xuICAgIHdpZHRoOjU1JTtcbn1cblxuLndyYXBwZXIgLmJ0bi1sb2FkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6I2Q2ZDZmYTtcbiAgICBjb2xvcjojMTEwMDUwO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzE1MWM4YjtcbiAgICBcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG4gICBcbiBcbiAgICAuY29udGFpbmVyXG4gICAge1xuICAgICAgICB3aWR0aDoyNzBweDtcbiAgICB9XG4gXG4gICAgLndyYXBwZXItc3VibWl0e1xuICAgICAgICB3aWR0aDo2NSU7XG4gICAgfVxuIFxuIFxuIH0iXX0= */"] });


/***/ }),

/***/ "LSMM":
/*!*****************************************!*\
  !*** ./src/app/services/git.service.ts ***!
  \*****************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class GitService {
    constructor(http) {
        this.http = http;
        this.getGit = (username) => {
            return this.http.get(`https://api.github.com/users/${username}`);
        };
        this.getRepo = (repo) => {
            return this.http.get(repo);
        };
    }
}
GitService.ɵfac = function GitService_Factory(t) { return new (t || GitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GitService, factory: GitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OPNc":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/message/message.component */ "5j9j");







const _c0 = function () { return [""]; };
const _c1 = function () { return { exact: true }; };
function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.email);
} }
function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return ["login"]; };
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.handleLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["signup"]; };
function HeaderComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
} }
class HeaderComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.email = null;
        this.faClone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClone"];
        this.handleLogout = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.auth.logout();
                this.router.navigateByUrl('/login');
                this.email = null;
            }
            catch (_a) {
                console.log("Cannot logout");
            }
        });
    }
    ngOnInit() {
        this.auth.getUser().subscribe((user) => {
            this.email = user === null || user === void 0 ? void 0 : user.email;
        }, (err) => {
            console.log("Error occurs");
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 5, consts: [["aria-hidden", "true", 1, "fa", "fa-github"], [1, "fa", "fa-clone"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_a_6_Template, 4, 5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 4, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 4, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 4, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 4, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-message");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%]\n{\n    display:flex;\n    width:100vw;\n    justify-content: space-around;\n    align-items: center;\n    height:100px;\n    color:#c9adff;\n}\n\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n{\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n    list-style: none;\n    width:50vw;\n}\n\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n    text-decoration: none;\n    color:#a09e9e;\n    font-weight: 600;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\n{\n    background: #ffffff;\n    width:0px;\n    transition: .5s ease-in-out;\n    position: absolute;\n    margin-top: 5px;\n    height:5px;\n    border-radius: 100px;\n}\n\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\n{\n    color:white;\n    \n}\n\n.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n{\n    color:white;\n}\n\n@media screen and (max-width:400px) {\n    header[_ngcontent-%COMP%]\n    {\n        flex-wrap: wrap;\n    }\n    \n    header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n    {\n        width:100vw;\n    }\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBT0E7SUFDSTs7UUFFSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLFdBQVc7SUFDZjs7Q0FFSCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaGVhZGVyXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOjEwMHZ3O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIGNvbG9yOiNjOWFkZmY7XG59XG5cbmhlYWRlciB1bFxue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6NTB2dztcbn1cbmhlYWRlciBhXG57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiNhMDllOWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudWwgYSBkaXZcbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHdpZHRoOjBweDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBoZWlnaHQ6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5oZWFkZXIgYTpob3Zlclxue1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxufVxuXG4uYWN0aXZlIGxpXG57XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG4gICAgaGVhZGVyXG4gICAge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIFxuICAgIGhlYWRlciB1bFxuICAgIHtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgfVxuXG4gfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/header/header.component */ "OPNc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "iIrt");




class AppComponent {
    constructor() {
        this.title = 'github-clone';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/header/header.component */ "OPNc");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "iIrt");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "a5gY");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_repo_repo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/repo/repo.component */ "iCUM");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/message/message.component */ "5j9j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
        _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
        _components_repo_repo_component__WEBPACK_IMPORTED_MODULE_11__["RepoComponent"],
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_17__["MessageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]] }); })();


/***/ }),

/***/ "a5gY":
/*!**************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class PagenotfoundComponent {
    constructor(title) {
        this.title = title;
        this.title.setTitle("Not Found");
    }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Not Found..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\n    color:white;\n    font-size: 100px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-family: 'Times New Roman', Times, serif;\n    color:#0e001b;\n    text-shadow: 10px 0px 0px #2e0950;\n}\n@media screen and (max-width:400px) {\n    body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size:60px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNERBQTREO0FBQ2hFO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUdBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoicGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuaDEgc3BhbntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBjb2xvcjojMGUwMDFiO1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDBweCAwcHggIzJlMDk1MDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG4gICAgYm9keSBoMXtcbiAgICAgICAgZm9udC1zaXplOjYwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "iCUM":
/*!***************************************************!*\
  !*** ./src/app/components/repo/repo.component.ts ***!
  \***************************************************/
/*! exports provided: RepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoComponent", function() { return RepoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_git_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/git.service */ "LSMM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RepoComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", repo_r1.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repo_r1.name, " ");
} }
class RepoComponent {
    constructor(gitService, ref) {
        this.gitService = gitService;
        this.ref = ref;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.gitService.getRepo(this.repoUrl).subscribe((repos) => {
            this.repos = repos;
            this.ref.detectChanges();
        }, (err) => {
            console.log("Can not fetching repos");
            this.ref.detectChanges();
        });
    }
}
RepoComponent.ɵfac = function RepoComponent_Factory(t) { return new (t || RepoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_git_service__WEBPACK_IMPORTED_MODULE_1__["GitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RepoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepoComponent, selectors: [["app-repo"]], inputs: { repoUrl: "repoUrl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "repos"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"]], template: function RepoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepoComponent_a_1_Template, 3, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".repos[_ngcontent-%COMP%]\n{\n    background:white;\n    min-width: 300px;\n    border-radius: 10px;\n    max-width: 500px;\n    width:50vw;\n    margin-top: 20px;\n    margin-bottom: 150px;\n}\n\n.repos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\n{\n    width:100%;\n    text-align: center;\n    padding:10px;\n    border-bottom:1px solid #e9e9e9;\n}\n\n.repos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-last-child(1)   div[_ngcontent-%COMP%]\n{\n    border-bottom:none;\n}\n\n.repos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n\n    text-decoration: none;\n    color:#030941;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n@media screen and (max-width:400px) {\n\n.repos[_ngcontent-%COMP%]\n{\n    min-width:200px;\n    max-width: 450px;\n    width:90%;\n}\n\n.repos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]\n{\n    width:100%;\n    text-align: center;\n    padding:10px;\n    border-bottom:1px solid #e9e9e9;\n}\n\n.repos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-last-child(1)   div[_ngcontent-%COMP%]\n{\n    border-bottom:none;\n}\n\n.repos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n\n    text-decoration: none;\n    color:#030941;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n   \n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBS0E7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7Ozs7Q0FJQyIsImZpbGUiOiJyZXBvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3NcbntcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOjUwdnc7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cblxuLnJlcG9zIGRpdlxue1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTllOWU5O1xufVxuXG4ucmVwb3MgYTpudGgtbGFzdC1jaGlsZCgxKSBkaXZcbntcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG59XG5cbi5yZXBvcyBhe1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiMwMzA5NDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpIHtcblxuLnJlcG9zXG57XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgd2lkdGg6OTAlO1xufVxuXG4ucmVwb3MgZGl2XG57XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlOWU5ZTk7XG59XG5cbi5yZXBvcyBhOm50aC1sYXN0LWNoaWxkKDEpIGRpdlxue1xuICAgIGJvcmRlci1ib3R0b206bm9uZTtcbn1cblxuLnJlcG9zIGF7XG5cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IzAzMDk0MTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuICAgXG4gXG4gfSJdfQ== */"] });


/***/ }),

/***/ "iIrt":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright @allangikonyo 2022, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]\n{\ncolor:#cdd4fd;\nposition: fixed;\nbottom:0px;\npadding:20px 0px;\nfont-size: 14px;\nwidth:100vw;\ntext-align: center;\nbackground:#000000;\n}\n\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\n{\n    color:#727272;\n}\n\n@media screen and (max-width:400px) {\n    footer[_ngcontent-%COMP%]\n    {\n        padding:7px 0px;\n        font-size: 10px;\n    }\n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLGFBQWE7QUFDYixlQUFlO0FBQ2YsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFNQTtJQUNJOztRQUVJLGVBQWU7UUFDZixlQUFlO0lBQ25COztDQUVIIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyXG57XG5jb2xvcjojY2RkNGZkO1xucG9zaXRpb246IGZpeGVkO1xuYm90dG9tOjBweDtcbnBhZGRpbmc6MjBweCAwcHg7XG5mb250LXNpemU6IDE0cHg7XG53aWR0aDoxMDB2dztcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJhY2tncm91bmQ6IzAwMDAwMDtcbn1cblxuZm9vdGVyIHNwYW5cbntcbiAgICBjb2xvcjojNzI3MjcyO1xufVxuXG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpIHtcbiAgICBmb290ZXJcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6N3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiBcbiB9Il19 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");


class AuthService {
    constructor(auth) {
        this.auth = auth;
        this.signup = (email, password) => {
            return this.auth.createUserWithEmailAndPassword(email, password);
        };
        this.login = (email, password) => {
            return this.auth.signInWithEmailAndPassword(email, password);
        };
        this.logout = () => {
            return this.auth.signOut();
        };
        this.getUser = () => {
            return this.auth.authState;
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Followers : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Following : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userResp.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.following);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userResp.location);
} }
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { userResp: "userResp" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "profile"], ["alt", "Profile Pic", 3, "src"], [1, "name"], [1, "social"], [1, "data"], [1, "other"], [1, "email"], [1, "bio"], [1, "url"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_div_0_Template, 23, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userResp);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%]\n{\n    min-width:300px;\n    max-width: 450px;\n    width:50vw;\n    height:250px;\n    margin-top: 50px;\n    border-radius:4px;\n    background:#fff;\n    \n}\n.profile[_ngcontent-%COMP%]\n{\n    text-align: center;\n    height:80px;\n}\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    width:150px;\n    height:150px;\n    border-radius: 50%;\n    transform: translateY(-50%);\n    border:4px solid white;\n}\n.name[_ngcontent-%COMP%]\n{\n    text-align: center;\n    color:#2a0397;\n}\n.name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 1.8em;\n}\n.other[_ngcontent-%COMP%]\n{\n    text-align: center;\n    margin-top: 8px;\n}\n.email[_ngcontent-%COMP%]\n{\n    color:#666161;\n    margin:6px;\n}\n.url[_ngcontent-%COMP%]\n{\n    color:#000000;\n    font-weight: 500;\n}\n.social[_ngcontent-%COMP%]\n{\n    color:#000;\n    font-size: 12px;\n    text-align: center;\n    margin-top: 10px;\n}\n.social[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]\n{\n    font-weight: 500;\n}\n.bio[_ngcontent-%COMP%]\n{\n    font-size: 12px;\n    padding:0px 20px;\n    color:#666161;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n@media screen and (max-width:400px) {\n\n.card[_ngcontent-%COMP%]\n{\n    min-width:200px;\n    max-width: 450px;\n    width:90%;\n    height:250px;\n    margin-top: 50px;\n    border-radius:4px;\n    background:#fff;\n}\n.profile[_ngcontent-%COMP%]\n{\n    text-align: center;\n    height:75px;\n}\n\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    width:120px;\n    height:120px;\n    border-radius: 50%;\n    transform: translateY(-50%);\n    border:4px solid white;\n}\n.name[_ngcontent-%COMP%]\n{\n    text-align: center;\n    color:#2a0397;\n}\n\n.name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 1.8em;\n}\n\n.other[_ngcontent-%COMP%]\n{\n    text-align: center;\n    margin-top: 8px;\n}\n\n.email[_ngcontent-%COMP%]\n{\n    color:#666161;\n    margin:6px;\n}\n\n.url[_ngcontent-%COMP%]\n{\n    color:#000000;\n    font-weight: 500;\n}\n\n.social[_ngcontent-%COMP%]\n{\n    color:#000;\n    font-size: 12px;\n    text-align: center;\n    margin-top: 10px;\n}\n\n.social[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]\n{\n    font-weight: 500;\n}\n\n\n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUVBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0REFBNEQ7QUFDaEU7QUFHQTs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7Ozs7Q0FJQyIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxue1xuICAgIG1pbi13aWR0aDozMDBweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHdpZHRoOjUwdnc7XG4gICAgaGVpZ2h0OjI1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIFxufVxuLnByb2ZpbGVcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OjgwcHg7XG59XG5cbi5wcm9maWxlIGltZ1xue1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvcmRlcjo0cHggc29saWQgd2hpdGU7XG59XG4ubmFtZVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjojMmEwMzk3O1xufVxuXG4ubmFtZSBoMXtcbiAgICBmb250LXNpemU6IDEuOGVtO1xufVxuXG4ub3RoZXJcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZW1haWxcbntcbiAgICBjb2xvcjojNjY2MTYxO1xuICAgIG1hcmdpbjo2cHg7XG59XG5cbi51cmxcbntcbiAgICBjb2xvcjojMDAwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb2NpYWxcbntcbiAgICBjb2xvcjojMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbCAuZGF0YVxue1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iaW9cbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBjb2xvcjojNjY2MTYxO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG5cbi5jYXJkXG57XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgd2lkdGg6OTAlO1xuICAgIGhlaWdodDoyNTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cbi5wcm9maWxlXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDo3NXB4O1xufVxuXG4ucHJvZmlsZSBpbWdcbntcbiAgICB3aWR0aDoxMjBweDtcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBib3JkZXI6NHB4IHNvbGlkIHdoaXRlO1xufVxuLm5hbWVcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IzJhMDM5Nztcbn1cblxuLm5hbWUgaDF7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbn1cblxuLm90aGVyXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmVtYWlsXG57XG4gICAgY29sb3I6IzY2NjE2MTtcbiAgICBtYXJnaW46NnB4O1xufVxuXG4udXJsXG57XG4gICAgY29sb3I6IzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29jaWFsXG57XG4gICAgY29sb3I6IzAwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwgLmRhdGFcbntcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbiBcbiB9Il19 */"] });


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class SignupComponent {
    constructor(authService, router, title, messageService) {
        this.authService = authService;
        this.router = router;
        this.title = title;
        this.messageService = messageService;
        this.handleSignUp = (f) => {
            $('.btn-load').html("<div></div><div></div><div></div>");
            $('.btn-load').addClass('btn-load-anim');
            const { username, password } = f.form.value;
            this.authService.signup(username, password)
                .then((res) => this.router.navigateByUrl(''))
                .catch((err) => {
                this.messageService.sendMessage(err.message);
                $('.btn-load').html("Sign Up");
            });
        };
        this.title.setTitle("Sign Up | Github Clone");
    }
    ngOnInit() {
        $('.active').mouseleave();
        $('.active').mouseover();
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 17, vars: 0, consts: [[1, "container"], ["method", "post", 3, "ngSubmit"], ["f", "ngForm"], [1, "wrapper"], ["for", "username"], ["id", "username", "ngModel", "", "name", "username"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password"], [1, "wrapper", "wrapper-submit"], ["type", "submit", 1, "btn-load"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.handleSignUp(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username/Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".container[_ngcontent-%COMP%]{\n    position: absolute;\n    top:35%;\n    left:50%;\n    padding:30px;\n    border-radius: 5px;\n    width:370px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    text-align: center;\n    transform: translate(-50%,-20%);\n    background: white;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\n{\n    font-size: 25px;\n    color:#000155;\n}\n\n.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    height:60px;\n   \n}\n\n.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    position: absolute;\n    top:5%;\n    font-size: 13px;\n    left:16%;\n    color:#acafe2e7;\n}\n\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\n    margin-top: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    position: absolute;\n    top:39%;\n    transition: .3s ease-in-out;\n    left:50%;\n    transform: translateX(-50%);\n    width:70%;\n    padding:5px 10px;\n    border:none;\n    outline:none;\n    border-bottom: 1px solid #010488;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\n    border-bottom: 1px solid #0a018546;\n}\n\n.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%]{\n    color:#5a0000;\n}\n\n.wrapper[_ngcontent-%COMP%]   .btn-load[_ngcontent-%COMP%]{\n    background:#110050;\n    border:1px solid transparent;\n    color:white;\n    border-radius: 2px;\n    cursor: pointer;\n    width:80px;\n    \n    \n    height:35px;\n    transition: .3s ease-in-out;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper-submit[_ngcontent-%COMP%]\n{\n    width:55%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .btn-load[_ngcontent-%COMP%]:hover{\n    background:#d6d6fa;\n    color:#110050;\n    border:1px solid #151c8b;\n    \n}\n\n@media screen and (max-width:400px) {\n   \n \n    .container[_ngcontent-%COMP%]\n    {\n        width:270px;\n    }\n \n    .wrapper-submit[_ngcontent-%COMP%]{\n        width:65%;\n    }\n \n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixlQUFlO0lBQ2YsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVOzs7SUFHVixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCOztBQUU1Qjs7QUFNQTs7O0lBR0k7O1FBRUksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztJQUNiOzs7Q0FHSCIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM1JTtcbiAgICBsZWZ0OjUwJTtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjM3MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjAlKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjojMDAwMTU1O1xufVxuLmNvbnRhaW5lciAud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICBcbn1cblxuLndyYXBwZXIgbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1JTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGVmdDoxNiU7XG4gICAgY29sb3I6I2FjYWZlMmU3O1xufVxuLmNvbnRhaW5lciBmb3Jte1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi53cmFwcGVyIGlucHV0LC53cmFwcGVyIGJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM5JTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOjcwJTtcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAxMDQ4ODtcbn1cbi53cmFwcGVyIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGEwMTg1NDY7XG59XG4ud3JhcHBlciBpbnB1dDpmb2N1cyB+IGxhYmVse1xuICAgIGNvbG9yOiM1YTAwMDA7XG59XG5cblxuLndyYXBwZXIgLmJ0bi1sb2Fke1xuICAgIGJhY2tncm91bmQ6IzExMDA1MDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6ODBweDtcbiAgICBcbiAgICBcbiAgICBoZWlnaHQ6MzVweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyLXN1Ym1pdFxue1xuICAgIHdpZHRoOjU1JTtcbn1cblxuLndyYXBwZXIgLmJ0bi1sb2FkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6I2Q2ZDZmYTtcbiAgICBjb2xvcjojMTEwMDUwO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzE1MWM4YjtcbiAgICBcbn1cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG4gICBcbiBcbiAgICAuY29udGFpbmVyXG4gICAge1xuICAgICAgICB3aWR0aDoyNzBweDtcbiAgICB9XG4gXG4gICAgLndyYXBwZXItc3VibWl0e1xuICAgICAgICB3aWR0aDo2NSU7XG4gICAgfVxuIFxuIFxuIH0iXX0= */"] });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    receiveMessage() {
        return this.subject;
    }
    sendMessage(message) {
        this.subject.next(message);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "a5gY");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const redirectUnauthorisedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['login']);
const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorisedToLogin }
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
    },
    {
        path: '**',
        component: _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map