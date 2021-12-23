(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/QwA":
/*!***************************************!*\
  !*** ./src/app/GlobalErrorHandler.ts ***!
  \***************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(inject) {
        this.router = inject.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]);
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        console.log(error);
        this.router.navigate(['/login']);
        alert("Something went wrong!");
    };
    GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
    return GlobalErrorHandler;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PersonalProjects\service-management-fe\src\main.ts */"zUnb");


/***/ }),

/***/ "0waP":
/*!************************!*\
  !*** ./src/app/aid.ts ***!
  \************************/
/*! exports provided: Aid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aid", function() { return Aid; });
var Aid = /** @class */ (function () {
    function Aid() {
        this.payments = [];
    }
    return Aid;
}());



/***/ }),

/***/ "2CIL":
/*!************************************!*\
  !*** ./src/app/payment.service.ts ***!
  \************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var PaymentService = /** @class */ (function () {
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function PaymentService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
    }
    PaymentService.prototype.createPayment = function (payment, aidId) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.post(this.baseUrl + "/addPayment/" + aidId, payment, { headers: headers });
    };
    PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
    return PaymentService;
}());



/***/ }),

/***/ "3zCV":
/*!****************************************************!*\
  !*** ./src/app/create-aid/create-aid.component.ts ***!
  \****************************************************/
/*! exports provided: CreateAidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAidComponent", function() { return CreateAidComponent; });
/* harmony import */ var _aid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aid */ "0waP");
/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../house */ "JhO3");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment */ "53RY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aid.service */ "Juz1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







var CreateAidComponent = /** @class */ (function () {
    function CreateAidComponent(aidService, router) {
        this.aidService = aidService;
        this.router = router;
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
        this.submitted = false;
        this.house = new _house__WEBPACK_IMPORTED_MODULE_1__["House"]();
        this.payment = new _payment__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
        this.isValid = true;
        this.validationMessage = "All fields are mandatory.";
        this.invalidDate = false;
        this.dateValidationMessage = "End Date must be greater then Start Date.";
    }
    CreateAidComponent.prototype.ngOnInit = function () {
        this.house = history.state.house;
        this.payment.comment = "Advance payment";
        this.pageHeader = this.house.houseNo + ", " + this.house.address;
    };
    CreateAidComponent.prototype.newAid = function () {
        this.submitted = false;
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
    };
    CreateAidComponent.prototype.save = function () {
        var _this = this;
        var house = new _house__WEBPACK_IMPORTED_MODULE_1__["House"]();
        var payment = new _payment__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
        house.houseId = this.house.houseId;
        this.aid.house = house;
        payment.amount = this.payment.amount;
        payment.comment = this.payment.comment;
        this.aid.payments[0] = payment;
        this.aidService
            .createAid(this.house, this.aid).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
                _this.isValid = false;
                _this.gotoAidList();
            }
        }, function (error) { return console.log(error); });
    };
    CreateAidComponent.prototype.onSubmit = function () {
        if (this.aid.name && this.aid.startDate && this.aid.startDate && this.aid.endDate && this.aid.costOfService) {
            var start = document.getElementById("startDate").valueAsNumber;
            var end = document.getElementById("endDate").valueAsNumber;
            if (end < start) {
                this.invalidDate = true;
                return false;
            }
            this.isValid = true;
            this.submitted = true;
            this.save();
            this.gotoAidList();
        }
        else {
            this.isValid = false;
            return false;
        }
    };
    CreateAidComponent.prototype.gotoAidList = function () {
        this.router.navigate(["/" + this.house.houseId + "/getAllAidsForHouse"], { state: { house: this.house } });
    };
    CreateAidComponent.ɵfac = function CreateAidComponent_Factory(t) { return new (t || CreateAidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_aid_service__WEBPACK_IMPORTED_MODULE_4__["AidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    CreateAidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateAidComponent, selectors: [["app-create-aid"]], decls: 64, vars: 14, consts: [[2, "text-align", "center"], [3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], [2, "color", "#ff0000"], ["type", "text", "id", "aidName", "required", "", "name", "aidName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "houseId", "required", "", "name", "houseId", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "startDate", "required", "", "name", "startDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "endDate", "required", "", "name", "endDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "background-color", "rgb(233, 95, 95)", "text-align", "center"], ["type", "number", "id", "costOfService", "required", "", "name", "costOfService", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "amount", "required", "", "name", "amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "comment", "name", "comment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"]], template: function CreateAidComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateAidComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Aid Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_10_listener($event) { return ctx.aid.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "House Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_17_listener($event) { return ctx.house.houseId = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Start Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_24_listener($event) { return ctx.aid.startDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "End Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_31_listener($event) { return ctx.aid.endDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cost Of Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_41_listener($event) { return ctx.aid.costOfService = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Advance Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_48_listener($event) { return ctx.payment.amount = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Comment:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateAidComponent_Template_input_ngModelChange_52_listener($event) { return ctx.payment.comment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Add Aid");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "You submitted successfully!");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Add Aid for ", ctx.pageHeader, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aid.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.house.houseId);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aid.startDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aid.endDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.invalidDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dateValidationMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aid.costOfService);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.payment.amount);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.payment.comment);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.isValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.validationMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.submitted);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]], styles: [".scroll[_ngcontent-%COMP%]{\r\n      overflow: scroll\r\n    }\r\n\r\n    #loading[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 50%;\r\n      z-index: 1;\r\n      width: 150px;\r\n      height: 150px;\r\n      margin: -75px 0 0 -75px;\r\n      border: 16px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 16px solid #3498db;\r\n      width: 120px;\r\n      height: 120px;\r\n      animation: spin 2s linear infinite;\r\n      }\r\n\r\n    @keyframes spin {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1haWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNO0lBQ0Y7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixXQUFXO01BQ1gsVUFBVTtNQUNWLFlBQVk7TUFDWixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLFlBQVk7TUFDWixhQUFhO01BQ2Isa0NBQWtDO01BQ2xDOztJQUVBO1FBQ0UsS0FBSyx1QkFBdUIsRUFBRTtRQUM5QixPQUFPLHlCQUF5QixFQUFFO01BQ3BDIiwiZmlsZSI6ImNyZWF0ZS1haWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGx7XHJcbiAgICAgIG92ZXJmbG93OiBzY3JvbGxcclxuICAgIH1cclxuXHJcbiAgICAjbG9hZGluZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBib3R0b206IDUwJTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgIH0iXX0= */"] });
    return CreateAidComponent;
}());



/***/ }),

/***/ "53RY":
/*!****************************!*\
  !*** ./src/app/payment.ts ***!
  \****************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());



/***/ }),

/***/ "5uJF":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.houses = [];
    }
    return User;
}());



/***/ }),

/***/ "8Utq":
/*!********************************************************!*\
  !*** ./src/app/list-expanse/list-expanse.component.ts ***!
  \********************************************************/
/*! exports provided: ListExpanseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExpanseComponent", function() { return ListExpanseComponent; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _expanse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expanse.service */ "eceV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ListExpanseComponent_table_16_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var e_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r4.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r4.date);
} }
function ListExpanseComponent_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListExpanseComponent_table_16_tr_5_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var exp_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exp_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", exp_r2.value);
} }
function ListExpanseComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var ListExpanseComponent = /** @class */ (function () {
    function ListExpanseComponent(expanseService, router) {
        this.expanseService = expanseService;
        this.router = router;
        this.showSpinner = false;
    }
    ListExpanseComponent.prototype.ngOnInit = function () {
        this.showSpinner = true;
        this.addExpanseButtonDisabled = true;
        this.reloadData();
    };
    ListExpanseComponent.prototype.reloadData = function () {
        var _this = this;
        this.username = localStorage.getItem("USERNAME");
        this.expanseService.getExpanseListForUser(this.username).subscribe(function (resp) {
            if (resp) {
                _this.showSpinner = false;
                _this.addExpanseButtonDisabled = false;
            }
            _this.expanses = resp;
            _this.expanses;
            _this.sortedExpanses = _this.sortByDate(_this.expanses);
        }, function (error) { return console.log(error); });
    };
    ListExpanseComponent.prototype.sortByDate = function (expanses) {
        var k = Object.keys(expanses);
        ;
        k.sort(function (one, two) { return (one > two ? -1 : 1); });
        var result = new Map;
        k.forEach(function (element) {
            result.set(element, expanses[element]);
        });
        return result;
    };
    ListExpanseComponent.prototype.asIsOrder = function (a, b) {
        return 1;
    };
    ListExpanseComponent.prototype.goToAddExpanse = function (route) {
        this.router.navigate(["/" + route]);
    };
    ListExpanseComponent.ɵfac = function ListExpanseComponent_Factory(t) { return new (t || ListExpanseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_expanse_service__WEBPACK_IMPORTED_MODULE_2__["ExpanseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    ListExpanseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListExpanseComponent, selectors: [["app-list-expanse"]], decls: 22, vars: 6, consts: [[1, "panel", "panel-primary", 2, "text-align", "center"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], ["class", "table table-striped", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [2, "text-align", "center"], [1, "btn", "btn-success", 2, "margin-top", "10px", 3, "disabled", "click"], ["colspan", "3", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function ListExpanseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Expanse List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListExpanseComponent_table_16_Template, 6, 2, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListExpanseComponent_div_18_Template, 3, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListExpanseComponent_Template_button_click_20_listener() { return ctx.goToAddExpanse("addExpanse"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add New Expanse");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 3, ctx.sortedExpanses, ctx.asIsOrder));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.addExpanseButtonDisabled);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWV4cGFuc2UuY29tcG9uZW50LmNzcyJ9 */"] });
    return ListExpanseComponent;
}());



/***/ }),

/***/ "9qEO":
/*!********************************************************!*\
  !*** ./src/app/create-house/create-house.component.ts ***!
  \********************************************************/
/*! exports provided: CreateHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHouseComponent", function() { return CreateHouseComponent; });
/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../house */ "JhO3");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _house_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../house.service */ "zbFg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var CreateHouseComponent = /** @class */ (function () {
    function CreateHouseComponent(houseService, router) {
        this.houseService = houseService;
        this.router = router;
        this.house = new _house__WEBPACK_IMPORTED_MODULE_0__["House"]();
        this.submitted = false;
        this.isValid = true;
        this.validationMessage = "All fields are mandatory.";
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    CreateHouseComponent.prototype.ngOnInit = function () {
        this.user.username = localStorage.getItem("USERNAME");
        this.user.userId = parseInt(localStorage.getItem("USERID"));
    };
    CreateHouseComponent.prototype.newHouse = function () {
        this.submitted = false;
        this.house = new _house__WEBPACK_IMPORTED_MODULE_0__["House"]();
    };
    CreateHouseComponent.prototype.save = function () {
        var _this = this;
        this.houseService
            .createHouse(this.house, this.user).subscribe(function (data) {
            console.log(data);
            _this.house = new _house__WEBPACK_IMPORTED_MODULE_0__["House"]();
            _this.isValid = false;
            _this.gotoList();
        }, function (error) { return console.log(error); });
    };
    CreateHouseComponent.prototype.onSubmit = function () {
        if (this.house.houseNo === undefined || this.house.houseNo === null || this.house.address === undefined || this.house.address === null) {
            this.isValid = false;
            return false;
        }
        this.isValid = true;
        this.submitted = true;
        this.save();
    };
    CreateHouseComponent.prototype.gotoList = function () {
        this.router.navigate(["/" + this.user.username + "/getAllHousesForUser"]);
    };
    CreateHouseComponent.ɵfac = function CreateHouseComponent_Factory(t) { return new (t || CreateHouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_house_service__WEBPACK_IMPORTED_MODULE_3__["HouseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    CreateHouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateHouseComponent, selectors: [["app-create-house"]], decls: 34, vars: 7, consts: [[2, "text-align", "center"], [1, "scroll", 3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], [2, "color", "#ff0000"], ["type", "text", "id", "userId", "required", "", "name", "userId", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-inline"], ["type", "text", "id", "houseNo", "name", "houseNo", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "address", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "hidden"], [2, "background-color", "rgb(233, 95, 95)", "text-align", "center"], ["type", "submit", 1, "btn", "btn-success"]], template: function CreateHouseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add House");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateHouseComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "User Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateHouseComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.userId = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "House Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateHouseComponent_Template_input_ngModelChange_16_listener($event) { return ctx.house.houseNo = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateHouseComponent_Template_input_ngModelChange_22_listener($event) { return ctx.house.address = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Add House");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "You submitted successfully!");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.userId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.house.houseNo);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.house.address);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.isValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.validationMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.submitted);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".scroll[_ngcontent-%COMP%]{\r\n      overflow: scroll\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ob3VzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO01BQ007SUFDRiIsImZpbGUiOiJjcmVhdGUtaG91c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGx7XHJcbiAgICAgIG92ZXJmbG93OiBzY3JvbGxcclxuICAgIH0iXX0= */"] });
    return CreateHouseComponent;
}());



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
var environment = {
    production: false
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

/***/ "CyCz":
/*!*********************************************************!*\
  !*** ./src/app/payemnt-alerts/payment-alert.service.ts ***!
  \*********************************************************/
/*! exports provided: PaymentAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentAlertService", function() { return PaymentAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var PaymentAlertService = /** @class */ (function () {
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function PaymentAlertService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
    }
    PaymentAlertService.prototype.getMissedPayments = function () {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        var userId = localStorage.getItem("USERID");
        return this.http.get(this.baseUrl + "/getMissedPayments/" + userId, { headers: headers });
    };
    PaymentAlertService.prototype.getPaymentNotification = function () {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        var userId = localStorage.getItem("USERID");
        return this.http.get(this.baseUrl + "/getPaymentNotification/" + userId, { headers: headers });
    };
    PaymentAlertService.ɵfac = function PaymentAlertService_Factory(t) { return new (t || PaymentAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PaymentAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentAlertService, factory: PaymentAlertService.ɵfac, providedIn: 'root' });
    return PaymentAlertService;
}());



/***/ }),

/***/ "DI59":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment */ "53RY");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment.service */ "2CIL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(paymentService) {
        this.paymentService = paymentService;
        this.payment = new _payment__WEBPACK_IMPORTED_MODULE_1__["Payment"]();
        this.submitted = false;
        this.isValid = true;
        this.validationMessage = "All fields are mandatory.";
        this.closePaymentBox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.newPayment = function () {
        this.submitted = false;
        this.payment = new _payment__WEBPACK_IMPORTED_MODULE_1__["Payment"]();
    };
    PaymentComponent.prototype.onSubmit = function () {
        if (this.payment.amount === undefined || this.payment.amount === null || this.payment.comment === undefined || this.payment.comment === null) {
            this.isValid = false;
            return false;
        }
        this.isValid = true;
        this.submitted = true;
        this.save();
    };
    PaymentComponent.prototype.save = function () {
        var _this = this;
        this.paymentService
            .createPayment(this.payment, this.aidId).subscribe(function (data) {
            console.log(data);
            _this.payment = new _payment__WEBPACK_IMPORTED_MODULE_1__["Payment"]();
            _this.isValid = false;
            _this.closePaymentBox.emit(true);
        }, function (error) { return console.log(error); });
    };
    PaymentComponent.prototype.closePaymentDialouge = function () {
        this.closePaymentBox.emit(true);
    };
    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"])); };
    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], inputs: { aidId: "aidId" }, outputs: { closePaymentBox: "closePaymentBox" }, decls: 27, vars: 6, consts: [[3, "hidden"], [3, "ngSubmit"], [1, "form-group", "form-inline"], ["for", "name", 2, "font-weight", "bold"], [2, "color", "#ff0000"], ["type", "number", "id", "amount", "name", "amount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "comment", "name", "comment", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "background-color", "rgb(233, 95, 95)", "text-align", "center"], [2, "text-align", "center"], ["type", "submit", 1, "btn", "btn-success", 2, "margin-right", "5px"], [1, "btn", "btn-success", 3, "click"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amount:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_7_listener($event) { return ctx.payment.amount = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comment:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_13_listener($event) { return ctx.payment.comment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Make Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_22_listener() { return ctx.closePaymentDialouge(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You submitted successfully!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment.amount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment.comment);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.validationMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
    return PaymentComponent;
}());



/***/ }),

/***/ "DPUJ":
/*!**********************************************!*\
  !*** ./src/app/user-details/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var UserService = /** @class */ (function () {
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
    }
    UserService.prototype.getUserDetails = function () {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.get(this.baseUrl + "/getUser/" + localStorage.getItem("USERID"), { headers: headers });
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());



/***/ }),

/***/ "E8sp":
/*!****************************!*\
  !*** ./src/app/expanse.ts ***!
  \****************************/
/*! exports provided: Expanse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expanse", function() { return Expanse; });
var Expanse = /** @class */ (function () {
    function Expanse() {
    }
    return Expanse;
}());



/***/ }),

/***/ "JhO3":
/*!**************************!*\
  !*** ./src/app/house.ts ***!
  \**************************/
/*! exports provided: House */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "House", function() { return House; });
var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());



/***/ }),

/***/ "Jphz":
/*!************************************************************!*\
  !*** ./src/app/create-expanse/create-expanse.component.ts ***!
  \************************************************************/
/*! exports provided: CreateExpanseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExpanseComponent", function() { return CreateExpanseComponent; });
/* harmony import */ var _expanse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expanse */ "E8sp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _expanse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expanse.service */ "eceV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var CreateExpanseComponent = /** @class */ (function () {
    function CreateExpanseComponent(expanseService, router) {
        this.expanseService = expanseService;
        this.router = router;
        this.expanse = new _expanse__WEBPACK_IMPORTED_MODULE_0__["Expanse"]();
        this.submitted = false;
        this.isValid = false;
    }
    CreateExpanseComponent.prototype.ngOnInit = function () {
    };
    CreateExpanseComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.expanse.amount && this.expanse.comment && this.expanse.date) {
            this.isValid = true;
            this.expanse.username = localStorage.getItem("USERNAME");
            this.expanseService.createExpanse(this.expanse).subscribe(function (data) {
                if (data) {
                    console.log(data);
                    _this.expanse = new _expanse__WEBPACK_IMPORTED_MODULE_0__["Expanse"]();
                    _this.expanse = data;
                    _this.isValid = false;
                    _this.gotoExpanseList();
                }
            }, function (error) { return console.log(error); });
        }
    };
    CreateExpanseComponent.prototype.gotoExpanseList = function () {
        this.router.navigate(["/getAllExpensesForUser/" + this.expanse.username], { state: { username: this.expanse.username } });
    };
    CreateExpanseComponent.ɵfac = function CreateExpanseComponent_Factory(t) { return new (t || CreateExpanseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_expanse_service__WEBPACK_IMPORTED_MODULE_2__["ExpanseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    CreateExpanseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateExpanseComponent, selectors: [["app-create-expanse"]], decls: 32, vars: 5, consts: [[2, "text-align", "center"], [3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], [2, "color", "#ff0000"], ["type", "date", "id", "expanseDate", "required", "", "name", "expanseDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "amount", "required", "", "name", "amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "comment", "required", "", "name", "comment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"]], template: function CreateExpanseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Expanse");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateExpanseComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateExpanseComponent_Template_input_ngModelChange_10_listener($event) { return ctx.expanse.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateExpanseComponent_Template_input_ngModelChange_17_listener($event) { return ctx.expanse.amount = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateExpanseComponent_Template_input_ngModelChange_24_listener($event) { return ctx.expanse.comment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add Expanse");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Expanse added!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.expanse.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.expanse.amount);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.expanse.comment);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.submitted);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhwYW5zZS5jb21wb25lbnQuY3NzIn0= */"] });
    return CreateExpanseComponent;
}());



/***/ }),

/***/ "Juz1":
/*!********************************!*\
  !*** ./src/app/aid.service.ts ***!
  \********************************/
/*! exports provided: AidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidService", function() { return AidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var AidService = /** @class */ (function () {
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function AidService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
    }
    AidService.prototype.createAid = function (house, aid) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.post(this.baseUrl + "/" + house.houseId + "/addAid", aid, { headers: headers });
    };
    AidService.prototype.getAidList = function (house) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.get(this.baseUrl + "/" + house.houseId + "/getAllAidsForHouse", { headers: headers });
    };
    AidService.prototype.getAid = function (aid) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.get(this.baseUrl + "/getAid/" + aid.aidId, { headers: headers });
    };
    AidService.prototype.updateAid = function (houseId, aid) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.put(this.baseUrl + "/" + houseId + "/updateAid", aid, { headers: headers });
    };
    AidService.ɵfac = function AidService_Factory(t) { return new (t || AidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AidService, factory: AidService.ɵfac, providedIn: 'root' });
    return AidService;
}());



/***/ }),

/***/ "MvdQ":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.service */ "Nfvz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RegisterUserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.successMessage);
} }
function RegisterUserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(route, router, registerService) {
        this.route = route;
        this.router = router;
        this.registerService = registerService;
        this.errorMessage = 'Invalid Credentials';
        this.registrationSuccess = false;
        this.submitted = false;
        this.showSpinner = false;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent.prototype.register = function () {
        var _this = this;
        document.getElementById("registerDiv").style.opacity = "0.5";
        document.getElementById("headerDiv").style.opacity = "0.5";
        this.submitted = true;
        this.showSpinner = true;
        this.registerService.register(this.email, this.password).subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.registrationSuccess = true;
                _this.successMessage = 'Registration Successful.';
                _this.showSpinner = false;
                document.getElementById("registerDiv").style.opacity = "1";
                document.getElementById("headerDiv").style.opacity = "1";
                _this.router.navigate(['/login']);
            }
        }, function () {
            document.getElementById("registerDiv").style.opacity = "1";
            document.getElementById("headerDiv").style.opacity = "1";
            _this.registrationSuccess = false;
            _this.showSpinner = false;
            _this.submitted = false;
        });
    };
    RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) { return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"])); };
    RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterUserComponent, selectors: [["app-register-user"]], decls: 18, vars: 5, consts: [["id", "registerDiv", 1, "container", "col-lg-6"], [1, "text-center"], [1, "card", 2, "text-align", "center"], [1, "card-body"], [1, "form-group"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group", 2, "text-align", "left", "margin-bottom", "10px"], ["for", "email", 2, "font-weight", "bold"], ["type", "email", "id", "email", "placeholder", "Enter Email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", 2, "text-align", "left", "margin-top", "10px"], ["for", "pwd", 2, "font-weight", "bold"], ["type", "password", "id", "password", "placeholder", "Enter password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "btn", "btn-success", 2, "margin-top", "10px", "text-align", "center", 3, "disabled", "click"], [1, "alert", "alert-success"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function RegisterUserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User-Registration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegisterUserComponent_div_6_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email :");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterUserComponent_div_15_Template, 3, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_16_listener() { return ctx.register(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["#loading[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 50%;\r\n      z-index: 1;\r\n      width: 150px;\r\n      height: 150px;\r\n      margin: -75px 0 0 -75px;\r\n      border: 16px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 16px solid #3498db;\r\n      width: 120px;\r\n      height: 120px;\r\n      animation: spin 2s linear infinite;\r\n      }\r\n      \r\n      @keyframes spin {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQ0FBa0M7TUFDbEM7O01BRUE7UUFDRSxLQUFLLHVCQUF1QixFQUFFO1FBQzlCLE9BQU8seUJBQXlCLEVBQUU7TUFDcEMiLCJmaWxlIjoicmVnaXN0ZXItdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICB9Il19 */"] });
    return RegisterUserComponent;
}());



/***/ }),

/***/ "Nfvz":
/*!***************************************************!*\
  !*** ./src/app/register-user/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
        //private baseUrl = 'http://10.0.2.2:8080/v1';
        //private baseUrl = 'http://localhost:8080/v1';
        //private baseUrl = 'http://192.168.1.4:8080/v1';
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    RegisterService.prototype.register = function (email, password) {
        this.user.email = email;
        this.user.password = password;
        this.user.username = email;
        return this.http.post(this.baseUrl + "/register", this.user);
    };
    RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
    return RegisterService;
}());



/***/ }),

/***/ "REYN":
/*!************************************************************!*\
  !*** ./src/app/payemnt-alerts/payemnt-alerts.component.ts ***!
  \************************************************************/
/*! exports provided: PayemntAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayemntAlertsComponent", function() { return PayemntAlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-alert.service */ "CyCz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PayemntAlertsComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayemntAlertsComponent_div_2_div_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var alert_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeMissed(alert_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alert_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r3.message);
} }
function PayemntAlertsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PayemntAlertsComponent_div_2_div_1_Template, 6, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alert_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r3);
} }
function PayemntAlertsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayemntAlertsComponent_div_3_div_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var wAlert_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closeWarning(wAlert_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wAlert_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wAlert_r9.message);
} }
function PayemntAlertsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PayemntAlertsComponent_div_3_div_1_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wAlert_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wAlert_r9);
} }
function PayemntAlertsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You do not any payment alerts!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PayemntAlertsComponent = /** @class */ (function () {
    function PayemntAlertsComponent(router, paymentAlertService) {
        this.router = router;
        this.paymentAlertService = paymentAlertService;
        this.missedAlerts = new Array();
        this.warningAlert = new Array();
    }
    PayemntAlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentAlertService.getMissedPayments().subscribe(function (data) {
            if (data) {
                var d = data;
                d.forEach(function (e) {
                    var a = { type: "alert alert-danger", message: e };
                    _this.missedAlerts.push(a);
                });
                _this.missedAlerts.concat(data);
            }
        }, function (error) { return console.log(error); });
        this.paymentAlertService.getPaymentNotification().subscribe(function (data) {
            if (data) {
                var d = data;
                d.forEach(function (e) {
                    var a = { type: "alert alert-danger", message: e };
                    _this.warningAlert.push(a);
                });
                _this.warningAlert.concat(data);
            }
        }, function (error) { return console.log(error); });
    };
    PayemntAlertsComponent.prototype.closeMissed = function (alert) {
        this.missedAlerts.splice(this.missedAlerts.indexOf(alert), 1);
    };
    PayemntAlertsComponent.prototype.closeWarning = function (alert) {
        this.warningAlert.splice(this.warningAlert.indexOf(alert), 1);
    };
    PayemntAlertsComponent.prototype.reset = function () {
        this.missedAlerts = Array.from(this.missedAlerts);
    };
    PayemntAlertsComponent.ɵfac = function PayemntAlertsComponent_Factory(t) { return new (t || PayemntAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_payment_alert_service__WEBPACK_IMPORTED_MODULE_2__["PaymentAlertService"])); };
    PayemntAlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PayemntAlertsComponent, selectors: [["app-payemnt-alerts"]], decls: 5, vars: 3, consts: [[1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [2, "float", "right"], [3, "click"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-info"]], template: function PayemntAlertsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Alerts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PayemntAlertsComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PayemntAlertsComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PayemntAlertsComponent_div_4_Template, 4, 0, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.missedAlerts);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warningAlert);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.missedAlerts.length === 0 && ctx.warningAlert.length === 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXllbW50LWFsZXJ0cy5jb21wb25lbnQuY3NzIn0= */"] });
    return PayemntAlertsComponent;
}());



/***/ }),

/***/ "SaS9":
/*!************************************************!*\
  !*** ./src/app/list-aid/list-aid.component.ts ***!
  \************************************************/
/*! exports provided: ListAidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAidComponent", function() { return ListAidComponent; });
/* harmony import */ var _aid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aid */ "0waP");
/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../house */ "JhO3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aid.service */ "Juz1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ListAidComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListAidComponent_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var aid_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.navigate(aid_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var aid_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](aid_r2.name);
} }
function ListAidComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var ListAidComponent = /** @class */ (function () {
    function ListAidComponent(aidService, router) {
        this.aidService = aidService;
        this.router = router;
        this.house = new _house__WEBPACK_IMPORTED_MODULE_1__["House"]();
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
        this.showSpinner = false;
    }
    ListAidComponent.prototype.ngOnInit = function () {
        this.house = history.state.house;
        this.showSpinner = true;
        this.addAidButtonDisabled = true;
        if (this.house != undefined) {
            this.pageHeader = "" + this.house.houseNo;
        }
        this.reloadData();
    };
    ListAidComponent.prototype.reloadData = function () {
        var _this = this;
        this.aidService.getAidList(this.house).subscribe(function (resp) {
            if (resp) {
                _this.showSpinner = false;
                _this.addAidButtonDisabled = false;
            }
            _this.aids = resp;
        });
    };
    ListAidComponent.prototype.goToAddAid = function (pageName) {
        this.router.navigate(['/addAid'], { state: { house: this.house } });
    };
    ListAidComponent.prototype.navigate = function (aid) {
        aid.house = this.house;
        this.router.navigate(['/showAid'], { state: { aid: aid } });
    };
    ListAidComponent.ɵfac = function ListAidComponent_Factory(t) { return new (t || ListAidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_aid_service__WEBPACK_IMPORTED_MODULE_3__["AidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ListAidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListAidComponent, selectors: [["app-list-aid"]], decls: 16, vars: 4, consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [2, "text-align", "center"], [1, "panel-body", 2, "text-align", "center"], [1, "table", "table-striped"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "btn", "btn-success", 2, "margin-top", "10px", 3, "disabled", "click"], [3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function ListAidComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aid List");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ListAidComponent_tr_11_Template, 3, 1, "tr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListAidComponent_div_12_Template, 3, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListAidComponent_Template_button_click_14_listener() { return ctx.goToAddAid("addAid"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Add New Aid");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.aids);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addAidButtonDisabled);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["#loading[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  bottom: 50%;\r\n  z-index: 1;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtYWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDOztFQUVBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6Imxpc3QtYWlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGluZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvdHRvbTogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9Il19 */"] });
    return ListAidComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'DSM';
        this.notId = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () { }, false);
        var username = localStorage.getItem("USERNAME");
        if (username) {
            var initials = username.slice(0, 2);
            document.getElementById("profilePic").innerHTML = initials.toUpperCase();
        }
        document.getElementById("homeButton").style.backgroundColor = "#BFBAB5";
        this.homeButtonSelected = true;
        this.paymentsButtonSelected = false;
        cordova.plugins.notification.local.schedule({
            id: 1,
            title: 'DSM Payment Reminder!',
            text: 'Check your payments and overdues for today!',
            trigger: { every: { hour: 9, minute: 15 }, count: 1 },
        });
    };
    AppComponent.prototype.home = function () {
        this.homeButtonSelected = true;
        this.paymentsButtonSelected = false;
        document.getElementById("homeButton").style.backgroundColor = "#BFBAB5";
        document.getElementById("paymentsButton").style.backgroundColor = "#E7E3DF";
        this.router.navigate(['ChooseService']);
    };
    AppComponent.prototype.goToProfile = function () {
        this.router.navigate(['UserDetails']);
    };
    AppComponent.prototype.checkPayments = function () {
        this.homeButtonSelected = false;
        this.paymentsButtonSelected = true;
        document.getElementById("homeButton").style.backgroundColor = "#E7E3DF";
        document.getElementById("paymentsButton").style.backgroundColor = "#BFBAB5";
        this.router.navigate(['paymentAlert']);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 1, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "backgroundDiv"], ["id", "headerDiv", 1, "header", 2, "text-align", "left"], [1, "logo", 3, "click"], ["id", "profilePic", 1, "dot", 3, "click"], [1, "container"], [2, "margin-bottom", "4px"], [2, "width", "100%"], ["id", "homeButton", 2, "text-align", "center", "width", "50%", "border-radius", "4px", "overflow", "hidden", 3, "click"], [1, "fa", "fa-home", "fa-3x"], ["id", "paymentsButton", 2, "text-align", "center", "width", "50%", "border-radius", "4px", "overflow", "hidden", 3, "click"], [1, "fa", "fa-rupee", "fa-3x"], [1, "card", 2, "background", "#BFBAB5"], [1, "card-body"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.home(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_5_listener() { return ctx.goToProfile(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_td_click_11_listener() { return ctx.home(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_td_click_13_listener() { return ctx.checkPayments(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*For personal use only");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: rgb(109 59 241);\r\n  font-weight: bold;\r\n  font-size: 27px;\r\n  color: aliceblue;\r\n  border-radius: 50%;\r\n  float: right;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: #E7E3DF;\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.backgroundDiv[_ngcontent-%COMP%]{\r\n  background: #E7E3DF; \r\n  min-height: 100vh;\r\n  max-height: 100%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  font-size: 18px; \r\n  line-height: 25px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n  font-size: 45px;\r\n  font-weight: bolder;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #E7E3DF;\r\n  color: white;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    font-size: xx-small;\r\n    text-align: center;  \r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 321px) {\r\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n    float: none;\r\n  }\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7TUFDTSxXQUFXO0FBQ2pCOztBQUVBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBOztJQUVFO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi5kb3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSA1OSAyNDEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTNERjtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iYWNrZ3JvdW5kRGl2e1xyXG4gIGJhY2tncm91bmQ6ICNFN0UzREY7IFxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7IFxyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlYWRlciBhLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyouaGVhZGVyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmViZjI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59Ki9cclxuXHJcbi5oZWFkZXIgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0UzREY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG59XHJcblxyXG4uYm9keXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qLmhlYWRlci1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59Ki9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XHJcbiAgLmhlYWRlciBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLmhlYWRlci1yaWdodCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9Ki9cclxufSJdfQ== */"] });
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _create_house_create_house_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-house/create-house.component */ "9qEO");
/* harmony import */ var _list_house_list_house_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-house/list-house.component */ "mGJA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _create_aid_create_aid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-aid/create-aid.component */ "3zCV");
/* harmony import */ var _list_aid_list_aid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-aid/list-aid.component */ "SaS9");
/* harmony import */ var _aid_details_aid_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aid-details/aid-details.component */ "mnCs");
/* harmony import */ var _update_aid_update_aid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-aid/update-aid.component */ "omva");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-user/register-user.component */ "MvdQ");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login-user/login-user.component */ "dot9");
/* harmony import */ var _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GlobalErrorHandler */ "/QwA");
/* harmony import */ var _create_expanse_create_expanse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-expanse/create-expanse.component */ "Jphz");
/* harmony import */ var _list_expanse_list_expanse_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-expanse/list-expanse.component */ "8Utq");
/* harmony import */ var _chose_service_chose_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chose-service/chose-service.component */ "jnTK");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-details/user-details.component */ "eFEo");
/* harmony import */ var _payemnt_alerts_payemnt_alerts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payemnt-alerts/payemnt-alerts.component */ "REYN");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_16__["GlobalErrorHandler"] }], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _create_house_create_house_component__WEBPACK_IMPORTED_MODULE_5__["CreateHouseComponent"],
        _list_house_list_house_component__WEBPACK_IMPORTED_MODULE_6__["ListHouseComponent"],
        _create_aid_create_aid_component__WEBPACK_IMPORTED_MODULE_9__["CreateAidComponent"],
        _list_aid_list_aid_component__WEBPACK_IMPORTED_MODULE_10__["ListAidComponent"],
        _aid_details_aid_details_component__WEBPACK_IMPORTED_MODULE_11__["AidDetailsComponent"],
        _update_aid_update_aid_component__WEBPACK_IMPORTED_MODULE_12__["UpdateAidComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"],
        _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"],
        _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_15__["LoginUserComponent"],
        _create_expanse_create_expanse_component__WEBPACK_IMPORTED_MODULE_17__["CreateExpanseComponent"],
        _list_expanse_list_expanse_component__WEBPACK_IMPORTED_MODULE_18__["ListExpanseComponent"],
        _chose_service_chose_service_component__WEBPACK_IMPORTED_MODULE_19__["ChoseServiceComponent"],
        _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailsComponent"],
        _payemnt_alerts_payemnt_alerts_component__WEBPACK_IMPORTED_MODULE_21__["PayemntAlertsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();


/***/ }),

/***/ "bWTe":
/*!*********************************************!*\
  !*** ./src/app/login-user/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var LoginService = /** @class */ (function () {
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    LoginService.prototype.login = function (email, password) {
        //var user: User = new User();
        this.user.username = email;
        this.user.password = password;
        return this.http.post(this.baseUrl + "/authenticate", this.user);
    };
    LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
    return LoginService;
}());



/***/ }),

/***/ "dot9":
/*!****************************************************!*\
  !*** ./src/app/login-user/login-user.component.ts ***!
  \****************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "bWTe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginUserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginUserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var LoginUserComponent = /** @class */ (function () {
    function LoginUserComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.showSpinner = false;
        this.errorMessage = 'Invalid Credentials';
        this.loginSuccess = true;
        this.submitted = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1/register';
    }
    //baseUrl = 'http://10.0.2.2:8080/v1/register';
    //baseUrl = 'http://localhost:8080/v1/register';
    //baseUrl = 'http://localhost:4200/register';
    //baseUrl = 'http://192.168.1.4:8080/v1/register';
    LoginUserComponent.prototype.ngOnInit = function () {
        document.getElementById("profilePic").style.visibility = "hidden";
        if (localStorage.getItem("USERNAME") && localStorage.getItem("USERID") && localStorage.getItem("TOKEN")) {
            this.user.email = localStorage.getItem("USERNAME"); //email and username are same
            this.user.userId = parseInt(localStorage.getItem("USERID"));
            this.user.username = localStorage.getItem("USERNAME");
            this.goToChoices();
        }
    };
    LoginUserComponent.prototype.login = function () {
        var _this = this;
        this.showSpinner = true;
        document.getElementById("loginDiv").style.opacity = "0.5";
        document.getElementById("headerDiv").style.opacity = "0.5";
        this.loginService.login(this.email, this.password).subscribe(function (result) {
            if (result) {
                _this.authenticatedUserDetails = result;
                console.log(_this.authenticatedUserDetails.token);
                _this.showSpinner = false;
                document.getElementById("loginDiv").style.opacity = "1";
                localStorage.setItem("TOKEN", _this.authenticatedUserDetails.token);
                localStorage.setItem("USERNAME", _this.email);
                localStorage.setItem("USERID", _this.authenticatedUserDetails.userId.toString());
                _this.user.email = _this.email;
                _this.user.userId = _this.authenticatedUserDetails.userId;
                _this.user.username = _this.email;
                _this.goToChoices();
            }
        }, function (error) {
            _this.loginSuccess = false;
            _this.showSpinner = false;
            document.getElementById("loginDiv").style.opacity = "1";
            document.getElementById("headerDiv").style.opacity = "1";
        });
    };
    LoginUserComponent.prototype.goToHouses = function () {
        this.router.navigate(["/" + this.email + "/getAllHousesForUser"], { state: { user: this.user } });
    };
    LoginUserComponent.prototype.goToChoices = function () {
        document.getElementById("profilePic").style.visibility = "visible";
        this.router.navigate(["/ChooseService"], { state: { user: this.user } });
    };
    LoginUserComponent.prototype.goToRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginUserComponent.ɵfac = function LoginUserComponent_Factory(t) { return new (t || LoginUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
    LoginUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginUserComponent, selectors: [["app-login-user"]], decls: 23, vars: 6, consts: [["id", "loginDiv", 1, "container", "col-lg-6"], [1, "text-center"], [1, "card", 2, "text-align", "center", "background", "#BFBAB5"], [1, "card-body"], [1, "form-group"], ["class", "alert alert-warning", 4, "ngIf"], [1, "form-group", 2, "text-align", "left"], ["for", "email", 2, "font-weight", "bold"], ["type", "email", "id", "email", "placeholder", "Enter Email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", 2, "text-align", "left", "margin-top", "10px"], ["for", "pwd", 2, "font-weight", "bold"], ["type", "password", "id", "password", "placeholder", "Enter Password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "btn", "btn-success", 2, "margin-top", "10px", 3, "disabled", "click"], [2, "margin-bottom", "5px"], [2, "font-weight", "bold", "text-decoration", "none", 3, "href"], [1, "alert", "alert-warning"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function LoginUserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginUserComponent_div_6_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "User Name :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginUserComponent_div_15_Template, 3, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_16_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Don't have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign-up!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loginSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.baseUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["#loading[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 50%;\r\n      z-index: 1;\r\n      width: 150px;\r\n      height: 150px;\r\n      margin: -75px 0 0 -75px;\r\n      border: 16px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 16px solid #3498db;\r\n      width: 120px;\r\n      height: 120px;\r\n      animation: spin 2s linear infinite;\r\n      }\r\n      \r\n      @keyframes spin {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQ0FBa0M7TUFDbEM7O01BRUE7UUFDRSxLQUFLLHVCQUF1QixFQUFFO1FBQzlCLE9BQU8seUJBQXlCLEVBQUU7TUFDcEMiLCJmaWxlIjoibG9naW4tdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICB9Il19 */"] });
    return LoginUserComponent;
}());



/***/ }),

/***/ "eFEo":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "DPUJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserDetailsComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserDetailsComponent_div_4_div_4_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "UserId: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "UserName: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.userId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email, " ");
} }
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        document.getElementById("userDetail").style.opacity = "0.5";
        document.getElementById("headerDiv").style.opacity = "0.5";
        this.showSpinner = true;
        this.getUserDetails();
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userService.getUserDetails()
            .subscribe(function (data) {
            if (data) {
                document.getElementById("userDetail").style.opacity = "1";
                document.getElementById("headerDiv").style.opacity = "1";
                _this.showSpinner = false;
                console.log(data);
                _this.user = data;
                _this.pageTitle = "" + _this.user.username;
                document.getElementById("userPic").innerHTML = _this.user.username.slice(0, 2).toUpperCase();
            }
        }, function (error) { return console.log(error); });
    };
    UserDetailsComponent.prototype.logout = function () {
        localStorage.removeItem("USERID");
        localStorage.removeItem("USERNAME");
        localStorage.removeItem("TOKEN");
        this.router.navigate([""]);
    };
    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 10, vars: 2, consts: [["id", "userDetail"], [2, "text-align", "center"], [4, "ngIf"], [1, "btn", "btn-danger", 2, "margin-left", "10px", "margin-top", "10px", 3, "click"], ["id", "userPic", 1, "dot"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserDetailsComponent_div_4_Template, 23, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDetailsComponent_Template_button_click_8_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["div[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px;\r\n    }\r\n    label[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      width: 150px;\r\n    }\r\n    #loading[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 50%;\r\n      z-index: 1;\r\n      width: 150px;\r\n      height: 150px;\r\n      margin: -75px 0 0 -75px;\r\n      border: 16px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 16px solid #3498db;\r\n      width: 120px;\r\n      height: 120px;\r\n      animation: spin 2s linear infinite;\r\n      }\r\n    @keyframes spin {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n      }\r\n    .dot[_ngcontent-%COMP%] {\r\n            text-align: center;\r\n            height: 100px;\r\n            width: 100px;\r\n            background-color: rgb(109 59 241);\r\n            font-weight: bold;\r\n            font-size: 55px;\r\n            border-radius: 50%;\r\n            display: inline-block;\r\n          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO01BQ00sbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixXQUFXO01BQ1gsVUFBVTtNQUNWLFlBQVk7TUFDWixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLFlBQVk7TUFDWixhQUFhO01BQ2Isa0NBQWtDO01BQ2xDO0lBRUE7UUFDRSxLQUFLLHVCQUF1QixFQUFFO1FBQzlCLE9BQU8seUJBQXlCLEVBQUU7TUFDcEM7SUFDQTtZQUNNLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGlDQUFpQztZQUNqQyxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixxQkFBcUI7VUFDdkIiLCJmaWxlIjoidXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgICNsb2FkaW5ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xyXG4gICAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgfVxyXG4gICAgICAuZG90IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDkgNTkgMjQxKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgIl19 */"] });
    return UserDetailsComponent;
}());



/***/ }),

/***/ "eceV":
/*!************************************!*\
  !*** ./src/app/expanse.service.ts ***!
  \************************************/
/*! exports provided: ExpanseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanseService", function() { return ExpanseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var ExpanseService = /** @class */ (function () {
    //private baseUrl = 'http://10.0.2.2:8080/v1/dem';
    //private baseUrl = 'http://localhost:8080/v1/dem';
    //private baseUrl = 'http://192.168.1.4:8080/v1/dem';
    //private baseUrl = 'http://localhost:8080/v1/dem';
    function ExpanseService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1/dem';
    }
    ExpanseService.prototype.createExpanse = function (expanse) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.post(this.baseUrl + "/addExpanse", expanse, { headers: headers });
    };
    ExpanseService.prototype.getExpanseListForUser = function (username) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.get(this.baseUrl + "/getAllExpanses/" + username, { headers: headers });
    };
    ExpanseService.ɵfac = function ExpanseService_Factory(t) { return new (t || ExpanseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ExpanseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExpanseService, factory: ExpanseService.ɵfac, providedIn: 'root' });
    return ExpanseService;
}());



/***/ }),

/***/ "jnTK":
/*!**********************************************************!*\
  !*** ./src/app/chose-service/chose-service.component.ts ***!
  \**********************************************************/
/*! exports provided: ChoseServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoseServiceComponent", function() { return ChoseServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


var ChoseServiceComponent = /** @class */ (function () {
    function ChoseServiceComponent(router) {
        this.router = router;
        this.username = localStorage.getItem("USERNAME");
    }
    ChoseServiceComponent.prototype.ngOnInit = function () {
        this.user = history.state.user;
        document.getElementById("headerDiv").style.opacity = "1";
        document.getElementById("profilePic").innerHTML = this.username.slice(0, 2).toUpperCase();
    };
    ChoseServiceComponent.prototype.navigateToDEM = function (route) {
        this.router.navigate([route + "/" + this.username]);
    };
    ChoseServiceComponent.prototype.navigateToDSM = function (route) {
        this.router.navigate([this.username + "/getAllHousesForUser"], { state: { user: this.user } });
    };
    ChoseServiceComponent.ɵfac = function ChoseServiceComponent_Factory(t) { return new (t || ChoseServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    ChoseServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChoseServiceComponent, selectors: [["app-chose-service"]], decls: 13, vars: 0, consts: [[1, "panel", "panel-primary", 2, "text-align", "center"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [3, "click"]], template: function ChoseServiceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoseServiceComponent_Template_td_click_8_listener() { return ctx.navigateToDEM("getAllExpensesForUser"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Daily Expanse Logger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoseServiceComponent_Template_td_click_11_listener() { return ctx.navigateToDSM("getAllHousesForUser"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Service Expanse Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9zZS1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ChoseServiceComponent;
}());



/***/ }),

/***/ "mGJA":
/*!****************************************************!*\
  !*** ./src/app/list-house/list-house.component.ts ***!
  \****************************************************/
/*! exports provided: ListHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHouseComponent", function() { return ListHouseComponent; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _house_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../house.service */ "zbFg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ListHouseComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListHouseComponent_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var house_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.navigate(house_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var house_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", house_r2.houseId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", house_r2.houseNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", house_r2.address, " ");
} }
function ListHouseComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var ListHouseComponent = /** @class */ (function () {
    function ListHouseComponent(houseService, router) {
        this.houseService = houseService;
        this.router = router;
        this.showSpinner = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    ListHouseComponent.prototype.ngOnInit = function () {
        this.showSpinner = true;
        this.addHouseButtonDisabled = true;
        this.reloadData();
        this.user = history.state.user;
    };
    ListHouseComponent.prototype.reloadData = function () {
        var _this = this;
        this.houseService.getHousesList().subscribe(function (resp) {
            if (resp) {
                _this.showSpinner = false;
                _this.addHouseButtonDisabled = false;
            }
            _this.houses = resp;
        });
    };
    ListHouseComponent.prototype.goToAddHouse = function (pageName) {
        this.router.navigate([pageName], { state: { user: this.user } });
    };
    ListHouseComponent.prototype.navigate = function (house) {
        this.router.navigate(['/ListAids'], { state: { house: house } });
    };
    ListHouseComponent.ɵfac = function ListHouseComponent_Factory(t) { return new (t || ListHouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_house_service__WEBPACK_IMPORTED_MODULE_2__["HouseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    ListHouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListHouseComponent, selectors: [["app-list-house"]], decls: 20, vars: 3, consts: [[1, "panel", "panel-primary", 2, "text-align", "center"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [2, "text-align", "center"], [1, "btn", "btn-success", 2, "margin-top", "10px", 3, "disabled", "click"], [3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function ListHouseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Houses");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "House Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "House No");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListHouseComponent_tr_15_Template, 7, 3, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListHouseComponent_div_16_Template, 3, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListHouseComponent_Template_button_click_18_listener() { return ctx.goToAddHouse("addHouse"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add New House");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.houses);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.addHouseButtonDisabled);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#loading[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 50%;\r\n      z-index: 1;\r\n      width: 150px;\r\n      height: 150px;\r\n      margin: -75px 0 0 -75px;\r\n      border: 16px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 16px solid #3498db;\r\n      width: 120px;\r\n      height: 120px;\r\n      animation: spin 2s linear infinite;\r\n      }\r\n      \r\n      @keyframes spin {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaG91c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQ0FBa0M7TUFDbEM7O01BRUE7UUFDRSxLQUFLLHVCQUF1QixFQUFFO1FBQzlCLE9BQU8seUJBQXlCLEVBQUU7TUFDcEMiLCJmaWxlIjoibGlzdC1ob3VzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICB9Il19 */"] });
    return ListHouseComponent;
}());



/***/ }),

/***/ "mnCs":
/*!******************************************************!*\
  !*** ./src/app/aid-details/aid-details.component.ts ***!
  \******************************************************/
/*! exports provided: AidDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidDetailsComponent", function() { return AidDetailsComponent; });
/* harmony import */ var _aid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aid */ "0waP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aid.service */ "Juz1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment/payment.component */ "DI59");






function AidDetailsComponent_div_4_div_47_tr_11_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AidDetailsComponent_div_4_div_47_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var payment_r6 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.navigate(payment_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payment_r6.paymentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payment_r6.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payment_r6.comment);
} }
function AidDetailsComponent_div_4_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AidDetailsComponent_div_4_div_47_tr_11_Template, 7, 3, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.aid.payments);
} }
function AidDetailsComponent_div_4_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You have not made any payments for this service yet!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AidDetailsComponent_div_4_div_50_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-payment", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closePaymentBox", function AidDetailsComponent_div_4_div_50_Template_app_payment_closePaymentBox_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.paymentSuccessfulHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("aidId", ctx_r3.aid.aidId);
} }
function AidDetailsComponent_div_4_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AidDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AidId: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "House No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "End Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Cost Of Service: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AidDetailsComponent_div_4_div_47_Template, 12, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AidDetailsComponent_div_4_div_48_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AidDetailsComponent_div_4_div_50_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AidDetailsComponent_div_4_div_51_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AidDetailsComponent_div_4_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.addPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Add Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Remaining Amt: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Complete: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.aidId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.startDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.house.houseNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.house.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.costOfService, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.havePaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.havePaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addPaymentClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.addPaymentClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.remainingAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.aid.complete, " ");
} }
var AidDetailsComponent = /** @class */ (function () {
    function AidDetailsComponent(route, router, aidService) {
        this.route = route;
        this.router = router;
        this.aidService = aidService;
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
    }
    AidDetailsComponent.prototype.ngOnInit = function () {
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
        this.aid = history.state.aid;
        this.showSpinner = true;
        this.updateAidButtonDisabled = true;
        document.getElementById("aidDetail").style.opacity = "0.5";
        document.getElementById("headerDiv").style.opacity = "0.5";
        this.getAid();
    };
    AidDetailsComponent.prototype.getAid = function () {
        var _this = this;
        this.aidService.getAid(this.aid)
            .subscribe(function (data) {
            if (data) {
                document.getElementById("aidDetail").style.opacity = "1";
                document.getElementById("headerDiv").style.opacity = "1";
                _this.showSpinner = false;
                _this.updateAidButtonDisabled = false;
                console.log(data);
                _this.aid = data;
                _this.havePaid = _this.aid.payments.length > 0 && _this.aid.payments[0].amount > 0 ? true : false;
                _this.pageTitle = _this.aid.name + ", " + _this.aid.house.houseNo;
            }
        }, function (error) { return console.log(error); });
    };
    AidDetailsComponent.prototype.updateAid = function (aid) {
        this.router.navigate(['/updateAid'], { state: { aid: aid } });
    };
    AidDetailsComponent.prototype.addPayment = function () {
        this.addPaymentClicked = true;
    };
    AidDetailsComponent.prototype.paymentSuccessfulHandler = function (paymentSuccessful) {
        this.addPaymentClicked = false;
        this.getAid();
    };
    AidDetailsComponent.ɵfac = function AidDetailsComponent_Factory(t) { return new (t || AidDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_aid_service__WEBPACK_IMPORTED_MODULE_3__["AidService"])); };
    AidDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AidDetailsComponent, selectors: [["app-aid-details"]], decls: 10, vars: 3, consts: [["id", "aidDetail"], [2, "text-align", "center"], [4, "ngIf"], [1, "btn", "btn-info", 2, "margin-left", "10px", "margin-top", "10px", 3, "disabled", "click"], [2, "border-style", "ridge", "text-align", "center"], [2, "font-weight", "bolder"], ["class", "panel-body", "style", "text-align: center;", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["id", "addPaymentDiv"], ["class", "card", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "btn", "btn-info", 2, "margin-left", "10px", "margin-bottom", "5px", 3, "disabled", "click"], [1, "panel-body", 2, "text-align", "center"], [1, "table", "table-striped"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "alert", "alert-warning"], [1, "card"], [3, "aidId", "closePaymentBox"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function AidDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AidDetailsComponent_div_4_Template, 67, 14, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AidDetailsComponent_Template_button_click_8_listener() { return ctx.updateAid(ctx.aid); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Update Aid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.aid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.updateAidButtonDisabled || ctx.addPaymentClicked);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"]], styles: ["div[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  label[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 150px;\r\n  }\r\n  #loading[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    bottom: 50%;\r\n    z-index: 1;\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: -75px 0 0 -75px;\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #3498db;\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n    }\r\n  @keyframes spin {\r\n      0% { transform: rotate(0deg); }\r\n      100% { transform: rotate(360deg); }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEM7RUFFQTtNQUNFLEtBQUssdUJBQXVCLEVBQUU7TUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtJQUNwQyIsImZpbGUiOiJhaWQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgI2xvYWRpbmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgIH1cclxuIl19 */"] });
    return AidDetailsComponent;
}());



/***/ }),

/***/ "omva":
/*!****************************************************!*\
  !*** ./src/app/update-aid/update-aid.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateAidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAidComponent", function() { return UpdateAidComponent; });
/* harmony import */ var _aid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aid */ "0waP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aid.service */ "Juz1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var UpdateAidComponent = /** @class */ (function () {
    function UpdateAidComponent(aidService, router) {
        this.aidService = aidService;
        this.router = router;
        this.aid = new _aid__WEBPACK_IMPORTED_MODULE_0__["Aid"]();
        this.submitted = false;
        this.isValid = true;
        this.updateClicked = false;
        this.validationMessage = "* marked fields are mandatory.";
    }
    UpdateAidComponent.prototype.ngOnInit = function () {
        this.aid = history.state.aid;
        this.pageTitle = "" + this.aid.name;
    };
    UpdateAidComponent.prototype.onSubmit = function () {
        if (this.aid.name && this.aid.endDate && this.aid.costOfService) {
            this.isValid = true;
            this.updateAid();
        }
        else {
            this.isValid = false;
            return false;
        }
    };
    UpdateAidComponent.prototype.updateAid = function () {
        var _this = this;
        this.updateClicked = true;
        document.getElementById("updateDiv").style.opacity = "0.5";
        document.getElementById("headerDiv").style.opacity = "0.5";
        this.aidService.updateAid(this.aid.house.houseId, this.aid)
            .subscribe(function (data) {
            console.log(data);
            _this.aid = data;
            _this.submitted = true;
            _this.gotoList();
        }, function (error) { return console.log(error); });
    };
    UpdateAidComponent.prototype.gotoList = function () {
        document.getElementById("updateDiv").style.opacity = "1";
        document.getElementById("headerDiv").style.opacity = "1";
        this.router.navigate(['/showAid'], { state: { aid: this.aid } });
    };
    UpdateAidComponent.prototype.cancel = function () {
        this.router.navigate(['/showAid'], { state: { aid: this.aid } });
    };
    UpdateAidComponent.ɵfac = function UpdateAidComponent_Factory(t) { return new (t || UpdateAidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_aid_service__WEBPACK_IMPORTED_MODULE_2__["AidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    UpdateAidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateAidComponent, selectors: [["app-update-aid"]], decls: 58, vars: 14, consts: [[2, "text-align", "center"], ["id", "updateDiv", 3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "aidId", "required", "", "name", "aidId", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "color", "#ff0000"], ["type", "text", "id", "aidName", "required", "", "name", "aidName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "houseNo", "required", "", "name", "houseNo", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "address", "required", "", "name", "address", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "startDate", "required", "", "name", "startDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "endDate", "required", "", "name", "endDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "costOfService", "required", "", "name", "costOfService", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "remaining", "required", "", "name", "remaining", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "hidden"], [2, "background-color", "rgb(233, 95, 95)", "text-align", "center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-success", 2, "margin-left", "4%", 3, "disabled", "click"]], template: function UpdateAidComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpdateAidComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Aid Id:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_7_listener($event) { return ctx.aid.aidId = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_14_listener($event) { return ctx.aid.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "House No:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_18_listener($event) { return ctx.aid.house.houseNo = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Address:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_22_listener($event) { return ctx.aid.house.address = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Start Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_29_listener($event) { return ctx.aid.startDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "End Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_36_listener($event) { return ctx.aid.endDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Cost Of Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_43_listener($event) { return ctx.aid.costOfService = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Remaining:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateAidComponent_Template_input_ngModelChange_47_listener($event) { return ctx.aid.remainingAmount = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Update");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateAidComponent_Template_button_click_56_listener() { return ctx.cancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.aidId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.house.houseNo);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.house.address);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.startDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.endDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.costOfService);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aid.remainingAmount);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isValid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.validationMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.updateClicked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.updateClicked);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["#loading[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  bottom: 50%;\r\n  z-index: 1;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1haWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEM7O0VBRUE7SUFDRSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7RUFDcEMiLCJmaWxlIjoidXBkYXRlLWFpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBib3R0b206IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfSJdfQ== */"] });
    return UpdateAidComponent;
}());



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
/* harmony import */ var _aid_details_aid_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aid-details/aid-details.component */ "mnCs");
/* harmony import */ var _chose_service_chose_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chose-service/chose-service.component */ "jnTK");
/* harmony import */ var _create_aid_create_aid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-aid/create-aid.component */ "3zCV");
/* harmony import */ var _create_expanse_create_expanse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-expanse/create-expanse.component */ "Jphz");
/* harmony import */ var _create_house_create_house_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-house/create-house.component */ "9qEO");
/* harmony import */ var _list_aid_list_aid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-aid/list-aid.component */ "SaS9");
/* harmony import */ var _list_expanse_list_expanse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-expanse/list-expanse.component */ "8Utq");
/* harmony import */ var _list_house_list_house_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-house/list-house.component */ "mGJA");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-user/login-user.component */ "dot9");
/* harmony import */ var _payemnt_alerts_payemnt_alerts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payemnt-alerts/payemnt-alerts.component */ "REYN");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-user/register-user.component */ "MvdQ");
/* harmony import */ var _update_aid_update_aid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-aid/update-aid.component */ "omva");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-details/user-details.component */ "eFEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















var routes = [
    { path: '', component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_9__["LoginUserComponent"] },
    { path: 'login', component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_9__["LoginUserComponent"] },
    { path: 'addExpanse', component: _create_expanse_create_expanse_component__WEBPACK_IMPORTED_MODULE_4__["CreateExpanseComponent"] },
    { path: ':username/getAllHousesForUser', component: _list_house_list_house_component__WEBPACK_IMPORTED_MODULE_8__["ListHouseComponent"] },
    { path: 'register', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__["RegisterUserComponent"] },
    { path: 'addHouse', component: _create_house_create_house_component__WEBPACK_IMPORTED_MODULE_5__["CreateHouseComponent"] },
    { path: 'addAid', component: _create_aid_create_aid_component__WEBPACK_IMPORTED_MODULE_3__["CreateAidComponent"] },
    { path: 'ListAids', component: _list_aid_list_aid_component__WEBPACK_IMPORTED_MODULE_6__["ListAidComponent"] },
    { path: 'showAid', component: _aid_details_aid_details_component__WEBPACK_IMPORTED_MODULE_1__["AidDetailsComponent"] },
    { path: 'updateAid', component: _update_aid_update_aid_component__WEBPACK_IMPORTED_MODULE_12__["UpdateAidComponent"] },
    { path: ':houseId/getAllAidsForHouse', component: _list_aid_list_aid_component__WEBPACK_IMPORTED_MODULE_6__["ListAidComponent"] },
    { path: 'getAllExpensesForUser/:username', component: _list_expanse_list_expanse_component__WEBPACK_IMPORTED_MODULE_7__["ListExpanseComponent"] },
    { path: 'ChooseService', component: _chose_service_chose_service_component__WEBPACK_IMPORTED_MODULE_2__["ChoseServiceComponent"] },
    { path: 'UserDetails', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"] },
    { path: 'paymentAlert', component: _payemnt_alerts_payemnt_alerts_component__WEBPACK_IMPORTED_MODULE_10__["PayemntAlertsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zbFg":
/*!**********************************!*\
  !*** ./src/app/house.service.ts ***!
  \**********************************/
/*! exports provided: HouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseService", function() { return HouseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var HouseService = /** @class */ (function () {
    //private baseUrl = 'http://localhost:8080/v1';
    //private baseUrl = 'http://10.0.2.2:8080/v1';
    //private baseUrl = 'http://192.168.1.4:8080/v1';
    function HouseService(http) {
        this.http = http;
        this.baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
    }
    HouseService.prototype.getHouse = function (id) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.get(this.baseUrl + "/" + id, { headers: headers });
    };
    HouseService.prototype.createHouse = function (house, user) {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        return this.http.post(this.baseUrl + "/" + user.userId + "/addHouse", house, { headers: headers });
    };
    //updateHouse(id: number, value: any): Observable<Object> {
    // return this.http.put(`${this.baseUrl}/${id}`, value);
    //}
    /*deleteHouse(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }*/
    HouseService.prototype.getHousesList = function () {
        var headers = { 'Authorization': "Bearer " + localStorage.getItem("TOKEN") };
        var username = localStorage.getItem("USERNAME");
        return this.http.get(this.baseUrl + "/" + username + "/getAllHousesForUser", { headers: headers });
    };
    HouseService.ɵfac = function HouseService_Factory(t) { return new (t || HouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    HouseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HouseService, factory: HouseService.ɵfac, providedIn: 'root' });
    return HouseService;
}());



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