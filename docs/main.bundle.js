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

/***/ "../../../../../src/app/admin/admin-navigator/admin-navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .paymentsStatHolder > span{\n        display: inline-block;\n        border-radius: 5px;\n        padding: 1px 9px;\n        border: 1px solid #e5e5e5;\n        margin: 2px;\n    }\n    .paymentsStatHolder > span > span{\n        font-weight: bold;\n    }\n    #payments_rows > tr > td{\n        vertical-align: middle;\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.95em;\n        text-align: center;\n    }\n    .paymentsStatHolder > span{\n        display: inline-block;\n        border-radius: 5px;\n        padding: 1px 9px;\n        border: 1px solid #e5e5e5;\n        margin: 2px;\n    }\n    .paymentsStatHolder > span > span{\n        font-weight: bold;\n    }\n    #payments_rows > tr > td{\n        vertical-align: middle;\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.95em;\n        text-align: center;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-navigator/admin-navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n                <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">切换</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n                        <a class=\"navbar-brand active\" routerLink=\"/home\"><span>{{coinName}}</span> 矿池</a>\n                </div>\n                <div class=\"collapse navbar-collapse\">\n                        <ul class=\"nav navbar-nav\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\n                                <li [routerLinkActive]=\"['active']\"><a routerLink=\"/admin/statistics\">\n                    <i class=\"fa fa-rocket\"></i> 统计\n                </a></li>\n\n                                <li [routerLinkActive]=\"['active']\"><a routerLink=\"/admin/monitoring\">\n                    <i class=\"fa fa-cubes\"></i> 监控\n                </a></li>\n\n                                <li [routerLinkActive]=\"['active']\"><a routerLink=\"/admin/userslist\">\n                    <i class=\"fa fa-paper-plane-o\"></i> 用户\n                </a></li>\n\n                              \n                        </ul>\n                </div>\n\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-navigator/admin-navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNavigatorComponent; });
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

var AdminNavigatorComponent = /** @class */ (function () {
    function AdminNavigatorComponent(cdr) {
        this.cdr = cdr;
        this.coinName = 'Vig coin';
    }
    AdminNavigatorComponent.prototype.ngOnInit = function () {
    };
    AdminNavigatorComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('status'),
        __metadata("design:type", Object)
    ], AdminNavigatorComponent.prototype, "data", void 0);
    AdminNavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-admin-navigator',
            template: __webpack_require__("../../../../../src/app/admin/admin-navigator/admin-navigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-navigator/admin-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]])
    ], AdminNavigatorComponent);
    return AdminNavigatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-navigator [status]=\"status\">\n</app-admin-navigator>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/monitoring/monitoring.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/monitoring/monitoring.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-navigator [status]=\"status\">\n</app-admin-navigator>\n\n<div class=\"adminMonitor\">\n\t<!-- Tab panes -->\n\t<div class=\"tab-content\">\n\t\t<div id=\"monitoringInfoView\"></div>\n\t\t<div class=\"tab-pane active\" id=\"rpcLog\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<h3>守护进程</h3>\n\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后检查:</strong>\n\t\t\t\t\t\t\t{{monitoringDaemon?.lastCheck}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后状态:</strong>\n\t\t\t\t\t\t\t<span id=\"daemonStatus\">{{monitoringDaemon?.lastStatus}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后响应:</strong>\n\t\t\t\t\t\t\t<pre>{{monitoringDaemon?.lastResponse}}</pre>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后失败:</strong>\n\t\t\t\t\t\t\t<span>{{monitoringDaemon?.lastFail}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后失败响应:</strong>\n\t\t\t\t\t\t\t<pre>{{monitoringDaemon?.lastFailResponse}}</pre>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<h3>钱包</h3>\n\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后检查:</strong>\n\t\t\t\t\t\t\t{{monitoringWallet?.lastCheck}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后状态:</strong>\n\t\t\t\t\t\t\t<span id=\"walletStatus\">{{monitoringWallet?.lastStatus}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后响应:</strong>\n\t\t\t\t\t\t\t<pre>{{monitoringWallet?.lastResponse}}</pre>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后失败:</strong>\n\t\t\t\t\t\t\t<span>{{monitoringWallet?.lastFail}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<strong>最后失败响应:</strong>\n\t\t\t\t\t\t\t<pre>{{monitoringWallet?.lastFailResponse}}</pre>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h3>日志</h3>\n\n\t\t\t<table class=\"table table-hover table-striped logList\" id=\"logTable\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"sort\">名称</th>\n\t\t\t\t\t\t<th class=\"sort\">修改时间</th>\n\t\t\t\t\t\t<th class=\"sort\">大小</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody id=\"log_rows\">\n\t\t\t\t</tbody>\n\t\t\t</table>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/monitoring/monitoring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(dataService) {
        this.dataService = dataService;
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPool = this.dataService.getCurrentPool();
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.renderLogInfo();
            }
        });
    };
    MonitoringComponent.prototype.getCheckTime = function (timestamp) {
        return timestamp ? new Date(timestamp * 1000).toLocaleString() : null;
    };
    MonitoringComponent.prototype.monitoringInfoParse = function (data) {
        var monitoringDaemon = {
            lastCheck: this.getCheckTime(data['monitoring'].daemon.lastCheck) || 'never',
            lastStatus: data['monitoring'].daemon.lastStatus || '',
            lastFail: this.getCheckTime(data['monitoring'].daemon.lastFail) || 'never',
            lastFailResponse: data['monitoring'].daemon.lastFailResponse || ' ',
            lastResponse: data['monitoring'].daemon.lastResponse || ' '
        };
        var monitoringWallet = {
            lastCheck: this.getCheckTime(data['monitoring'].wallet.lastCheck) || 'never',
            lastStatus: data['monitoring'].wallet.lastStatus || '',
            lastFail: this.getCheckTime(data['monitoring'].wallet.lastFail) || 'never',
            lastFailResponse: data['monitoring'].wallet.lastFailResponse || ' ',
            lastResponse: data['monitoring'].wallet.lastResponse || ' '
        };
        var properData = {};
        for (var prop in data) {
            if (data.hasOwnProperty('logs')) {
                for (var _i = 0, _a = Object.keys(data['logs']); _i < _a.length; _i++) {
                    var log = _a[_i];
                    $('#log_rows').append('<tr>' +
                        '<td><a target=blank href=' + this.dataService.config.api + '/admin_log?file=' + log + ' >' + log + '</a></td>' +
                        '<td>' + (new Date(data['logs'][log].changed * 1000)).toLocaleString() + '</td>' +
                        '<td>' + data['logs'][log].size + ' bytes' + '</td>' +
                        '</tr>');
                }
            }
        }
        this.monitoringDaemon = monitoringDaemon;
        this.monitoringWallet = monitoringWallet;
    };
    MonitoringComponent.prototype.renderLogInfo = function () {
        var _this = this;
        var url = 'http://' + this.currentPool[2].pool.host + ':' + this.currentPool[2].pool.port;
        $.getJSON(url + '/admin_monitoring?password=' + this.getCookiesItem('password'), function (data, textStatus, jqXHR) {
            _this.monitoringInfoParse(data);
            $('#daemonStatus').addClass(data['monitoring'].daemon.lastStatus === 'ok' ? 'text-success' : 'text-danger');
            $('#walletStatus').addClass(data['monitoring'].wallet.lastStatus === 'ok' ? 'text-success' : 'text-danger');
        });
    };
    MonitoringComponent.prototype.getCookiesItem = function (key) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
            encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };
    MonitoringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-monitoring',
            template: __webpack_require__("../../../../../src/app/admin/monitoring/monitoring.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/monitoring/monitoring.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/statistics/statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminStats>div {\n    min-height: 127px;\n    color: #2E3D31;\n    position: relative;\n    -webkit-box-shadow: inset 0px 0px 0 1px #ffffff;\n    box-shadow: inset 0px 0px 0 1px #ffffff;\n    background-color: #EBEBEB;\n}\n\n.adminStats .statValue {\n    position: absolute;\n    display: block;\n    padding: 0 10px;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    line-height: 100px;\n    text-align: center;\n    word-wrap: break-word;\n    font-size: 17px;\n}\n\n.adminStats .statValue.lead {\n    font-size: 21px;\n    font-weight: 600;\n}\n\n.adminStats h4 {\n    text-align: right;\n    font-size: 18px;\n    position: absolute;\n    bottom: 10px;\n    right: 15px;\n    margin: 0;\n    color: #26839B;\n}\n\n.adminStats .statsTitle h3 {\n    line-height: 127px;\n    margin: 0;\n    color: #00C1FF;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-navigator [status]=\"status\">\n</app-admin-navigator>\n\n<div class=\"container\">\n\t<div class=\"row adminStats\">\n\t\t<div class=\"col-sm-3 color1\">\n\t\t\t<h4>未付统计</h4>\n\t\t\t<span class=\"statValue\" id=\"totalOwed\">{{data?.lastTotalOwed}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-3 color2\">\n\t\t\t<h4>已付统计</h4>\n\t\t\t<span class=\"statValue\" id=\"totalPaid\">{{data?.lastTotalPaid}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-3 color3\">\n\t\t\t<h4>采矿量统计</h4>\n\t\t\t<span class=\"statValue\" id=\"totalMined\">{{data?.lastTotalMined}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-3 color4\">\n\t\t\t<h4>利润(未扣除交易费)</h4>\n\t\t\t<span class=\"statValue\" id=\"profit\">{{data?.lastProfit}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-4 color5\">\n\t\t\t<h4>平均出块率(算力/难度)</h4>\n\t\t\t<span class=\"statValue lead\" id=\"averageLuck\">{{data?.lastAverageLuck}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-4 color6\">\n\t\t\t<h4>孤链百分比</h4>\n\t\t\t<span class=\"statValue lead\" id=\"orphanPercent\">{{data?.lastOrphanPercent}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-4 color7\">\n\t\t\t<h4>注册地址统计</h4>\n\t\t\t<span class=\"statValue lead\" id=\"registeredAddresses\">{{data?.lastRegisteredAddresses}}</span>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(dataService) {
        this.dataService = dataService;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getStats(false);
    };
    StatisticsComponent.prototype.getReadableCoins = function (coins) {
        return this.status.config.coinUnits;
    };
    StatisticsComponent.prototype.formatLuck = function (difficulty, shares) {
        var percent = Math.round(shares / difficulty * 100);
        if (!percent) {
            return '?';
        }
        return percent + '%';
    };
    StatisticsComponent.prototype.getStats = function (promptPassword) {
        var _this = this;
        var password = this.getCookiesItem('password');
        if (!password || promptPassword) {
            password = prompt('Enter admin password');
        }
        $('#loading').show();
        this.dataService.getStatus().subscribe(function (status) {
            if (Object.keys(status).length > 0) {
                _this.status = status;
                _this.dataService.getAdminStatus(password).subscribe(function (data) {
                    if (Object.keys(data).length > 0) {
                        _this.setCookiesItem('password', password, Infinity);
                        _this.data = data;
                        _this.updateStatus();
                    }
                }, function (error) {
                    _this.removeCookiesItem('password', false, false);
                    _this.getStats(true);
                });
            }
        });
    };
    StatisticsComponent.prototype.updateStatus = function () {
        this.data.lastTotalOwed = this.dataService.getReadableCoins(this.status, this.data.totalOwed, 4);
        this.data.lastTotalPaid = this.dataService.getReadableCoins(this.status, this.data.totalPaid, 4);
        this.data.lastTotalMined = this.dataService.getReadableCoins(this.status, this.data.totalRevenue, 4);
        this.data.lastProfit = this.dataService.getReadableCoins(this.status, (this.data.totalRevenue - this.data.totalOwed - this.data.totalPaid), 4);
        this.data.lastAverageLuck = this.formatLuck(this.data.totalDiff, this.data.totalShares);
        this.data.lastOrphanPercent = (this.data.blocksOrphaned / this.data.blocksUnlocked * 100).toFixed(2);
        this.data.lastRegisteredAddresses = this.data.totalWorkers;
    };
    StatisticsComponent.prototype.renderData = function (data) {
        $('#totalOwed').text(this.getReadableCoins(data.totalOwed));
        $('#totalPaid').text(this.getReadableCoins(data.totalPaid));
        $('#totalMined').text(this.getReadableCoins(data.totalRevenue));
        $('#profit').text(this.getReadableCoins(data.totalRevenue - data.totalOwed - data.totalPaid));
        $('#averageLuck').html(this.formatLuck(data.totalDiff, data.totalShares));
        $('#orphanPercent').text((data.blocksOrphaned / data.blocksUnlocked * 100).toFixed(2));
        $('#registeredAddresses').text(data.totalWorkers);
    };
    StatisticsComponent.prototype.getCookiesItem = function (key) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
            encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };
    StatisticsComponent.prototype.setCookiesItem = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (sPath === void 0) { sPath = ''; }
        if (sDomain === void 0) { sDomain = ''; }
        if (bSecure === void 0) { bSecure = false; }
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                    break;
                case String:
                    sExpires = '; expires=' + vEnd;
                    break;
                case Date:
                    sExpires = '; expires=' + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey)
            + '=' + encodeURIComponent(sValue) + sExpires
            + (sDomain ? '; domain=' + sDomain : '')
            + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
        return true;
    };
    StatisticsComponent.prototype.removeCookiesItem = function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasCookiesItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey)
            + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
            + (sDomain ? '; domain=' + sDomain : '')
            + (sPath ? '; path=' + sPath : '');
        return true;
    };
    StatisticsComponent.prototype.hasCookiesItem = function (sKey) {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-statistics',
            template: __webpack_require__("../../../../../src/app/admin/statistics/statistics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/userslist/userslist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usersList {\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n.usersList .tooltip-inner {\n    max-width: 100%;\n}\n\n.usersList .sort {\n    cursor: pointer;\n}\n\n.usersList tr>th:first-child {\n    width: 40%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/userslist/userslist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-navigator [status]=\"status\">\n</app-admin-navigator>\n\n<div class=\"container\">\n\t<div class=\"table-responsive\">\n\t\t<table class=\"table table-hover table-striped usersList\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"width:30%;\">钱包地址</th>\n\t\t\t\t\t<th style=\"width:10%;\">算力</th>\n\t\t\t\t\t<th style=\"width:10%;\">总算力</th>\n\t\t\t\t\t<th style=\"width:16%;\">未支付</th>\n\t\t\t\t\t<th style=\"width:10%;\">已支付</th>\n\t\t\t\t\t<th style=\"width:14%;\">最后块</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody id=\"users_rows\">\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/userslist/userslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserslistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserslistComponent = /** @class */ (function () {
    function UserslistComponent(dataService) {
        this.dataService = dataService;
    }
    UserslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPool = this.dataService.getCurrentPool();
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.init();
            }
        });
    };
    UserslistComponent.prototype.init = function () {
        var _this = this;
        var url = 'http://' + this.currentPool[2].pool.host + ':' + this.currentPool[2].pool.port;
        var host = this.currentPool[2].pool.host;
        $.getJSON(url + '/admin_users?password=' + this.getCookiesItem('password'), function (data, textStatus, jqXHR) {
            data = _this.parseUsers(data);
            for (var i = 0; i < data.length; i += 1) {
                $('#users_rows').append('<tr>' +
                    '<td id=number-' + host + '><a href=./?wallet=' + data[i].number + '>' + data[i].number + '</a></td>' +
                    '<td id=readableHashrate-' + host + '>' + data[i].readableHashrate + '</td>' +
                    '<td id=readableHashes-' + host + '>' + data[i].readableHashes + '</td>' +
                    '<td id=readablePending-' + host + '>' + data[i].readablePending + '</td>' +
                    '<td id=readablePaid-' + host + '>' + data[i].readablePaid + '</td>' +
                    '<td id=timeago-' + host + '>' + data[i].timeago + '</td>' +
                    '</tr>');
            }
        });
    };
    UserslistComponent.prototype.parseUsers = function (wallets) {
        var walletsArray = [];
        var properObject;
        for (var wallet in wallets) {
            if (wallets.hasOwnProperty(wallet)) {
                var userData = wallets[wallet];
                walletsArray.push({
                    number: wallet,
                    wallet: userData,
                    timeago: new Date(userData.lastShare * 1000).toLocaleString(),
                    readablePending: this.dataService.getReadableCoins(this.status, userData.pending, 4),
                    readablePaid: this.dataService.getReadableCoins(this.status, userData.paid, 4),
                    readableHashrate: this.getReadableHashRateString(userData.hashrate) + '/s',
                    readableHashes: this.getReadableHashRateString(userData.hashes)
                });
            }
        }
        properObject = walletsArray.sort(function (a, b) {
            return a.wallet.hashrate - b.wallet.hashrate;
        }).reverse();
        return properObject;
    };
    UserslistComponent.prototype.getReadableHashRateString = function (hashrate) {
        hashrate = hashrate || 0;
        var i = 0;
        var byteUnits = [' H', ' KH', ' MH', ' GH', ' TH', ' PH'];
        while (hashrate > 1000) {
            hashrate = hashrate / 1000;
            i++;
        }
        return parseFloat(hashrate).toFixed(2) + byteUnits[i];
    };
    UserslistComponent.prototype.getCookiesItem = function (key) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
            encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };
    UserslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-userslist',
            template: __webpack_require__("../../../../../src/app/admin/userslist/userslist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/userslist/userslist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], UserslistComponent);
    return UserslistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/************************************************\n*** charts ***\n************************************************/\n\n.chartsPoolStat {\n    padding-top: 30px;\n}\n\n.chartWrap {\n    display: none;\n}\n\n.userChart .chart,\n.chartWrap .chart {\n    margin-bottom: 10px;\n}\n\n.userChart h4,\n.chartWrap h4 {\n    text-align: center;\n    font-size: 21px;\n}\n\n.userChart {\n    display: none;\n}\n\n/************************************************\n*** sparkline override ***\n************************************************/\n\n.jqstooltip {\n    border: none !important;\n    background: rgba(0, 0, 0, 0.8) !important;\n    border-radius: 2px !important;\n    margin-top: -20px !important;\n    /* Override Bootstrap defaults to fix jQuery.Sparkline tooltips appearance */\n    -webkit-box-sizing: content-box !important;\n    box-sizing: content-box !important;\n}\n\n.jqstooltip .jqsfield {\n    color: #ccc;\n    font-size: 13px !important;\n}\n\n.jqstooltip .jqsfield b {\n    color: #fff;\n}\n\n/************************************************\n*** home page fixes ***\n************************************************/\n\n#yourAddressDisplay {\n    word-wrap: break-word;\n}\n\n/************************************************\n*** 20% width block ***\n************************************************/\n\n.col-sm-20 {\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n@media (min-width: 768px) {\n    .col-sm-20 {\n        float: left;\n        width: 20%;\n    }\n}\n\n.marketFooter{\n        font-size: 10px;\n        opacity: 0.6;\n    }\n\n#networkLastReward{\n        text-transform: uppercase;\n    }\n\n#lastHash{\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.8em;\n    }\n\n#poolDonations{\n        font-size: 0.75em;\n    }\n\n#miningProfitCalc{\n        margin: 35px 0;\n    }\n\n#calcHashDropdown{\n        border-radius: 0;\n        border-left: 0;\n        border-right: 0;\n    }\n\n#calcHashHolder{\n        width: 590px;\n        max-width: 100%;\n    }\n\n#calcHashRate{\n        z-index: inherit;\n        font-family: 'Inconsolata', monospace;\n    }\n\n#calcHashAmount{\n        font-family: 'Inconsolata', monospace;\n    }\n\n#calcHashResultsHolder{\n        min-width: 145px;\n        max-width: 145px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n#yourStatsInput{\n        z-index: inherit;\n        font-family: 'Inconsolata', monospace;\n    }\n\n#yourAddressDisplay > span {\n        font-family: 'Inconsolata', monospace;\n    }\n\n#lookUp > span:nth-child(2){\n        display: none;\n    }\n\n.yourStats{\n        display: none;\n    }\n\n#yourAddressDisplay{\n        display: inline-block;\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        vertical-align: middle;\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.9em;\n    }\n\n#addressError{\n        color: red;\n    }\n\n#payments_rows > tr > td{\n        vertical-align: middle;\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.95em;\n        text-align: center;\n    }\n\n#payments_rows > tr > td:nth-child(2){\n        text-align: left;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigator [status]=\"status\">\n</app-navigator>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AppComponent(titleService, meta, dataService, router) {
        this.titleService = titleService;
        this.meta = meta;
        this.dataService = dataService;
        this.router = router;
        this.title = '田一块 VIG 矿池';
        this.titleService.setTitle(this.title);
        this.meta.addTag({ name: 'keywords', content: 'VIG,矿池,BITCOIN,比特币' });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial Get status
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__caculator_caculator_component__ = __webpack_require__("../../../../../src/app/caculator/caculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigator_navigator_component__ = __webpack_require__("../../../../../src/app/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__get_started_get_started_component__ = __webpack_require__("../../../../../src/app/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pool_blocks_pool_blocks_component__ = __webpack_require__("../../../../../src/app/pool-blocks/pool-blocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__payments_payments_component__ = __webpack_require__("../../../../../src/app/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blockchain_blockchain_component__ = __webpack_require__("../../../../../src/app/blockchain/blockchain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__networks_networks_component__ = __webpack_require__("../../../../../src/app/networks/networks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_statistics_statistics_component__ = __webpack_require__("../../../../../src/app/admin/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_monitoring_monitoring_component__ = __webpack_require__("../../../../../src/app/admin/monitoring/monitoring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_userslist_userslist_component__ = __webpack_require__("../../../../../src/app/admin/userslist/userslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_navigator_admin_navigator_component__ = __webpack_require__("../../../../../src/app/admin/admin-navigator/admin-navigator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__caculator_caculator_component__["a" /* CaculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigator_navigator_component__["a" /* NavigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__status_status_component__["a" /* StatusComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_user_component__["b" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__get_started_get_started_component__["a" /* GetStartedComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pool_blocks_pool_blocks_component__["a" /* PoolBlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_15__payments_payments_component__["a" /* PaymentsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__blockchain_blockchain_component__["a" /* BlockchainComponent */],
                __WEBPACK_IMPORTED_MODULE_17__networks_networks_component__["a" /* NetworksComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_statistics_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_monitoring_monitoring_component__["a" /* MonitoringComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_userslist_userslist_component__["a" /* UserslistComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_navigator_admin_navigator_component__["a" /* AdminNavigatorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__routing_routing_module__["a" /* RoutingModule */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* DocCookies */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__navigator_navigator_component__["a" /* NavigatorComponent */], __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blockchain/blockchain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .blocksStatHolder span {\n      display: inline-block;\n      border-radius: 5px;\n      padding: 8px 20px;\n      border: 1px solid #e5e5e5;\n      margin: 2px;\n    }\n\n    .blocksStatHolder>span>span {\n      font-weight: bold;\n      padding: 8px 20px;\n    }\n\n    #blocks_rows>tr>td {\n      vertical-align: middle;\n      font-family: 'Inconsolata', monospace;\n      font-size: 0.95em;\n      text-align: center;\n    }\n\n    .luckGood {\n      color: darkgreen;\n    }\n\n    .luckBad {\n      color: darkred;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blockchain/blockchain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"input-group\">\n    <input class=\"form-control\" placeholder=\"搜索块号，块哈希，交易哈希\" id=\"txt_search\">\n    <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" id=\"btn_search\">\n        <span><i class=\"fa fa-search\"></i> 搜索</span>\n    </button>\n    </span>\n  </div>\n\n  <div class=\"blocksStatHolder\">\n    <span class=\"bg-primary\">所有块: <b id=\"networkLastReward\">{{status?.network.height}}</b></span>\n    <span class=\"bg-primary\">算力: <b id=\"networkHashrate\">{{status?.networkHashrate}}</b></span>\n    <span class=\"bg-primary\">难度: <b id=\"networkDifficulty\">{{status?.network.difficulty}}</b></span>\n  </div>\n\n  <hr>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th><i class=\"fa fa-bars\"></i> 高度</th>\n          <th><i class=\"fa fa-unlock-alt\"></i> 大小</th>\n          <th><i class=\"fa fa-paw\"></i> 块哈希</th>\n          <th><i class=\"fa fa-clock-o\"></i> 发现时间</th>\n          <th><i class=\"fa fa-bars\"></i> 交易</th>\n        </tr>\n      </thead>\n      <tbody id=\"blocks_rows\">\n\n      </tbody>\n    </table>\n  </div>\n\n  <p class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"loadMoreBlocks\">加载更多</button>\n  </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blockchain/blockchain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockchainComponent = /** @class */ (function () {
    function BlockchainComponent(dataService) {
        this.dataService = dataService;
    }
    BlockchainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.status.networkHashrate = _this.dataService.getReadableHashRateString(_this.status.network.difficulty / _this.status.config.coinDifficultyTarget) + ' / 秒';
            }
        });
    };
    BlockchainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-blockchain',
            template: __webpack_require__("../../../../../src/app/blockchain/blockchain.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blockchain/blockchain.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], BlockchainComponent);
    return BlockchainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/caculator/caculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    #calcHashDropdown{\n        border-radius: 0;\n        border-left: 0;\n        border-right: 0;\n    }\n    #calcHashHolder{\n        width: 590px;\n        max-width: 100%;\n    }\n    #calcHashRate{\n        z-index: inherit;\n        font-family: 'Inconsolata', monospace;\n    }\n    #calcHashAmount{\n        font-family: 'Inconsolata', monospace;\n    }\n    #calcHashResultsHolder{\n        min-width: 145px;\n        max-width: 145px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/caculator/caculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div id=\"miningProfitCalc\">\n    <h3>挖矿利润估算</h3>\n    <div id=\"calcHashHolder\">\n      <div class=\"input-group\">\n        <input type=\"number\" *ngIf=\"data\" min=\"0\" [(ngModel)]=\"hashrate\" class=\"form-control\" id=\"calcHashRate\" placeholder=\"你的算力\"\n          (change)=\"calcEstimateProfit()\" (keyup)=\"calcEstimateProfit()\">\n        <div class=\"input-group-btn\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" id=\"calcHashDropdown\">\n            <span id=\"calcHashUnit\" data-mul=\"1\">{{text}}</span>\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" id=\"calcHashUnits\">\n            <li>\n              <a href=\"#\" data-mul=\"0\" (click)=\"changeUnits('H/s', 0)\">H/s</a>\n            </li>\n            <li>\n              <a href=\"#\" data-mul=\"1\" (click)=\"changeUnits('KH/s', 1)\">KH/s</a>\n            </li>\n            <li>\n              <a href=\"#\" data-mul=\"2\" (click)=\"changeUnits('MH/s', 2)\">MH/s</a>\n            </li>\n          </ul>\n        </div>\n        <span class=\"input-group-addon\" id=\"calcHashResultsHolder\">{{amount}} {{symbol}} / 天</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/caculator/caculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaculatorComponent; });
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

var CaculatorComponent = /** @class */ (function () {
    function CaculatorComponent() {
        this.amount = '0';
        this.text = 'KH';
        this.unit = 1;
        this.symbol = 'VIG';
    }
    CaculatorComponent.prototype.ngOnInit = function () {
    };
    CaculatorComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.symbol = this.data.config.symbol;
        }
    };
    CaculatorComponent.prototype.changeUnits = function (text, unit) {
        this.text = text;
        this.unit = unit;
        this.calcEstimateProfit();
        return false;
    };
    CaculatorComponent.prototype.calcEstimateProfit = function () {
        console.log('profit');
        try {
            var rateUnit = Math.pow(1024, this.unit);
            console.log('profit 1');
            console.log(rateUnit);
            var hashRate = parseFloat(this.hashrate) * rateUnit;
            console.log('profit 3');
            console.log(hashRate);
            var profit = (hashRate * 86400 / this.data.network.difficulty) * this.data.network.reward;
            if (profit) {
                this.amount = this.getReadableCoins(profit, 2, true);
                return;
            }
        }
        catch (e) {
            console.log(e);
        }
        this.amount = '0';
    };
    CaculatorComponent.prototype.getReadableCoins = function (coins, digits, withoutSymbol) {
        if (withoutSymbol === void 0) { withoutSymbol = null; }
        var amount = (parseInt(coins || 0, 10)
            / this.data.config.coinUnits)
            .toFixed(digits || this.data.config.coinUnits.toString().length - 1);
        return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('status'),
        __metadata("design:type", Object)
    ], CaculatorComponent.prototype, "data", void 0);
    CaculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-caculator',
            template: __webpack_require__("../../../../../src/app/caculator/caculator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/caculator/caculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaculatorComponent);
    return CaculatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <h3>联系方式</h3>\n  <p>矿池支持邮件地址：<a id=\"emailLink\" href=\"mailto:{{config.email}}\">{{config.email}}</a></p>\n  <p>QQ群: 730935569</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(dataService) {
        this.dataService = dataService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.defaultIndex = 0;
        this.config = {
            // api: 'http://localhost:8119',
            // api: 'http://vig-pool.tyk.im:8119',
            // api: 'http://pool-1.vigcoin.org:8119',
            // api_blockexplorer: 'http://vig-pool.tyk.im:19810',
            // poolHost: 'vig-pool.tyk.im',
            // poolPort: 6666,
            irc: 'irc.freenode.net/#vig',
            email: 'calidion@gmail.com',
            cryptonatorWidget: ['{symbol}-BTC', '{symbol}-USD', '{symbol}-EUR'],
            easyminerDownload: 'https://github.com/zone117x/cryptonote-easy-miner/releases/',
            blockchainExplorer: '/?hash={id}#blockchain_block',
            transactionExplorer: '/blockchina/transaction/{id}',
            themeCss: 'themes/default-theme.css',
            interval: 20000,
            networkStat: {
                'vig': [
                    ['http://vig-pool.tyk.im', 'http://vig-pool.tyk.im:8119',
                        {
                            pool: {
                                host: 'vig-pool.tyk.im',
                                port: 8119
                            },
                            url: 'https://pools.vigcoin.org',
                            desc: '主矿池/旧矿池'
                        }
                    ],
                    ['http://pool-1.vigcoin.org', 'http://pool-1.vigcoin.org:8119', {
                            pool: {
                                host: 'pool-1.vigcoin.org',
                                port: 8119
                            },
                            url: 'http://pool-1.vigcoin.org:8119',
                            desc: '测试矿池'
                        }]
                ]
            }
        };
        this.storageIndexName = 'pool-index';
        this.pools = this.config.networkStat.vig;
        try {
            this.defaultIndex = parseInt(localStorage.getItem(this.storageIndexName), 10);
        }
        catch (e) {
            console.log(e);
            this.defaultIndex = 0;
        }
        this.selectPool(this.defaultIndex);
    }
    DataService.prototype.selectPool = function (i) {
        this.defaultIndex = i || 0;
        if (this.defaultIndex > this.pools.length) {
            this.defaultIndex = 0;
        }
        localStorage.setItem(this.storageIndexName, String(this.defaultIndex));
        if (this.pools.length <= 0) {
            return;
        }
        this.currentPool = this.pools[this.defaultIndex];
        this.currentAPI = this.currentPool[1];
    };
    DataService.prototype.getPools = function () {
        return this.pools;
    };
    DataService.prototype.getCurrentPool = function () {
        return this.currentPool;
    };
    DataService.prototype.getCurrentUrl = function () {
        return this.currentAPI;
    };
    DataService.prototype.getAdminStatus = function (password) {
        var sub = this.get(this.currentAPI + '/admin_stats?password=' + password);
        return sub;
    };
    DataService.prototype.getPayments = function (options) {
        var sub = this.get(this.currentAPI + '/get_payments', options);
        return sub;
    };
    DataService.prototype.getStatus = function () {
        var _this = this;
        if (this.status) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.status);
        }
        var sub = this.get(this.currentAPI + '/stats');
        sub.subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
            }
        });
        return sub;
    };
    DataService.prototype.getLiveStatus = function () {
        var _this = this;
        console.log('inside getStatus');
        if (this.liveStatus) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.liveStatus);
        }
        var sub = this.get(this.currentAPI + '/live_stats');
        sub.subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.liveStatus = data;
            }
        });
        return sub;
    };
    DataService.prototype.getAddressStatus = function (options) {
        var _this = this;
        console.log('inside getStatus');
        if (this.addressStatus) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.addressStatus);
        }
        var sub = this.get(this.currentAPI + '/stats_address', options);
        sub.subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.addressStatus = data;
            }
        });
        return sub;
    };
    DataService.prototype.clearAddressStatus = function () {
        this.addressStatus = null;
    };
    DataService.prototype.getBlocks = function (options) {
        return this.get(this.currentAPI + '/get_blocks', options);
    };
    DataService.prototype.get = function (url, params) {
        return this.http.get(url, { params: params });
    };
    DataService.prototype.post = function (url, data) {
        return this.http.post(url, data);
    };
    DataService.prototype.timeAgo = function (time) {
        var now = new Date().getTime() / 1000;
        console.log(time);
        console.log(now);
        var diff = now - time;
        console.log('diff = ' + diff);
        if (diff < 60) {
            return '小于1分钟';
        }
        if (diff < 3600) {
            return (diff / 60).toFixed(0) + ' 分钟前';
        }
        if (diff < 24 * 3600) {
            return (diff / 3600).toFixed(0) + ' 小时前';
        }
        if (diff < 30 * 24 * 3600) {
            return (diff / 24 / 3600).toFixed(0) + ' 天前';
        }
        if (diff < 12 * 30 * 24 * 3600) {
            return (diff / 30 / 24 / 3600).toFixed(0) + ' 年前';
        }
    };
    DataService.prototype.formatAmounts = function (amount, unit) {
        var rounded = Math.round(amount);
        return '' + rounded + ' ' + unit;
    };
    DataService.prototype.getReadableTime = function (seconds) {
        var units = [[60, '秒'], [60, '分钟'], [24, '小时'],
            [7, '天'], [4, '周'], [12, '月'], [1, '年']];
        var amount = seconds;
        var i = 0;
        for (; i < units.length; i++) {
            if (amount < units[i][0]) {
                return this.formatAmounts(amount, units[i][1]);
            }
            amount = amount / units[i][0];
        }
        return this.formatAmounts(amount, units[i - 1][1]);
    };
    DataService.prototype.getBlockchainUrl = function (status, id) {
        return this.hashToUrl(status, id);
    };
    DataService.prototype.hashToUrl = function (status, id) {
        var explorer = this.config.blockchainExplorer;
        return explorer.replace('{symbol}', status.config.symbol.toLowerCase()).replace('{id}', id);
    };
    DataService.prototype.getTransactionUrl = function (status, id) {
        var explorer = this.config.transactionExplorer;
        return explorer.replace('{symbol}', status.config.symbol.toLowerCase()).replace('{id}', id);
    };
    DataService.prototype.getReadableCoins = function (status, coins, digits, withoutSymbol) {
        if (withoutSymbol === void 0) { withoutSymbol = null; }
        var coinUnits = __WEBPACK_IMPORTED_MODULE_3_lodash__["get"](status, 'config.coinUnits');
        var amount = (parseInt(coins || 0, 10)
            / coinUnits).toFixed(digits || coinUnits.toString().length - 1);
        return amount + (withoutSymbol ? '' : (' ' + status.config.symbol));
    };
    DataService.prototype.formatDate = function (time) {
        if (!time) {
            return '';
        }
        return new Date(parseInt(time, 10) * 1000).toLocaleString();
    };
    DataService.prototype.hashRateWithUnit = function (hashrate) {
        var i = 0;
        var byteUnits = [' H', ' KH', ' MH', ' GH', ' TH', ' PH'];
        while (hashrate > 1000) {
            hashrate = hashrate / 1000;
            i++;
        }
        return hashrate.toFixed(2) + byteUnits[i];
    };
    DataService.prototype.getReadableHashRateString = function (hashrate) {
        return this.hashRateWithUnit(hashrate);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer>\n    <div class=\"text-muted\">\n      由<a target=\"_blank\" href=\"https://github.com/forknote/cryptonote-forknote-pool\"><i class=\"fa fa-github\"></i> cryptonote-forknote-pool</a>      提供支持\n      <span id=\"poolVersion\"></span> 基于\n      <a href=\"http://www.gnu.org/licenses/gpl-2.0.html\">GPL</a>原则开放源码\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    hr{\n        border-top-color: #d9d9d9;\n        margin-top: 40px !important;\n        margin-bottom: 40px !important;\n    }\n    #miningPorts > .stats{\n        width: auto !important;\n        margin-right: 70px;\n        margin-left: 15px;\n        display: inline-block;\n    }\n    #miningPorts > .stats:last-child{\n        margin-right: 0;\n    }\n    .getting_started_windows{\n        line-height: 40px;\n    }\n    #getting_started_list > li{\n        margin-bottom: 20px;\n    }\n    #mining_apps > tr:first-child > td{\n        padding-top: 35px;\n    }\n    #mining_apps > tr > td{\n        border-top: none;\n    }\n    #mining_apps > tr:nth-child(even) > td{\n        border-bottom: 1px solid #e5e5e5;\n        padding-bottom: 20px;\n    }\n    #mining_apps > tr:nth-child(odd) > td{\n        padding-top: 20px;\n    }\n    #mining_apps{\n        margin-top: 10px;\n    }\n    .miningAppTitle{\n        font-weight: bold;\n    }\n    .exampleAddress{\n        font-style: italic;\n    }\n    #cpuminer_code{\n        display: inline-block;\n        white-space: normal;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigator [status]=\"status\">\n</app-navigator>\n\n<div class=\"container\">\n\n  <h3>连接详情</h3>\n  <div class=\"stats\">\n    <div>\n      <i class=\"fa fa-cloud\"></i> 矿池服务器地址:\n      <span id=\"miningPoolHost\">{{host}}</span>\n    </div>\n  </div>\n\n  <h3>矿池挖矿端口</h3>\n  <div id=\"miningPorts\" class=\"row\">\n    <div class=\"stats\" *ngFor=\"let port of ports\">\n      <div>\n        <i class=\"fa fa-tachometer\"></i> 端口:\n        <span class=\"miningPort\">{{port.port}}</span>\n      </div>\n      <div>\n        <i class=\"fa fa-unlock-alt\"></i> 开始难度:\n        <span class=\"miningPortDiff\">{{port.difficulty}}</span>\n      </div>\n      <div>\n        <i class=\"fa fa-question\"></i> 描述:\n        <span class=\"miningPortDesc\">{{port.desc}}</span>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <h3>对\n    <i class=\"fa fa-windows\"></i> Windows 新手矿工</h3>\n  <p class=\"getting_started_windows\">\n    你可以\n    <a class=\"btn btn-default btn-sm\" href=\"{{config.easyminerDownload}}\" target=\"_blank\" id=\"easyminer_link\">\n      <i class=\"fa fa-download\"></i>下载</a> 或者运行\n    <a target=\"_blank\" href=\"https://github.com/zone117x/cryptonote-easy-miner\">cryptonote-easy-miner</a>\n    <i class=\"fa fa-github\"></i> (可以自动生成钱包地址)或者运行CPUMiner(需要正确配置参数)。\n  </p>\n  <hr>\n  <app-caculator [status]=\"status\">\n  </app-caculator>\n  <app-user [data]=\"status\">\n  </app-user>\n  <hr>\n\n\n  <h3>挖矿软件</h3>\n  <div class=\"yourStats table-responsive\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>\n            <i class=\"fa fa-book\"></i> 软件名</th>\n          <th>\n            <i class=\"fa fa-car\"></i> 架构</th>\n          <th>\n            <i class=\"fa fa-download\"></i> 下载</th>\n          <th>\n            <i class=\"fa fa-comments\"></i> 讨论</th>\n          <th>\n            <i class=\"fa fa-file-code-o\"></i> 源码</th>\n        </tr>\n      </thead>\n      <tbody id=\"mining_apps\">\n        <tr>\n          <td class=\"miningAppTitle\">XMR-Stak-CPU (by fireice_uk)</td>\n          <td>CPU</td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/fireice-uk/xmr-stak-cpu/releases\">Github</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://www.reddit.com/r/Monero/comments/5lsfgt/xmrstakcpu_high_performance_open_source_miner/\">Reddit</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/fireice-uk/xmr-stak-cpu\">Github</a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>xmr-stak-cpu</code> 请编辑\n            <code>config.txt</code>填入相应的参数。\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">XMR-Stak-AMD (by fireice_uk)</td>\n          <td>OpenCL (AMD)</td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/fireice-uk/xmr-stak-amd/releases\">Github</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://www.reddit.com/r/Monero/comments/5prg4a/xmrstakamd_released/\">Reddit</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/fireice-uk/xmr-stak-amd\">Github</a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>xmr-stak-amd</code> 请编辑\n            <code>config.txt</code>填入相应的参数\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">CPUMiner (forked by LucasJones & Wolf)</td>\n          <td>CPU</td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/lucasjones/cpuminer-multi/releases\">Github</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://bitcointalk.org/index.php?topic=632724\">BitcoinTalk</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/lucasjones/cpuminer-multi\">Github</a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>minerd -a cryptonight -o stratum+tcp://<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span> -u <span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span> -p x</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">YAM Miner (by yvg1900)</td>\n          <td>CPU</td>\n          <td>\n            <a target=\"_blank\" href=\"https://mega.co.nz/#F!h0tkXSxZ!f62uoUXogkxQmP2xO8Ib-g\">MEGA</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://twitter.com/yvg1900\">Twitter</a>\n          </td>\n          <td>私有\n            <i class=\"fa fa-frown-o\"></i>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>yam -c x -M stratum+tcp://<span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span>:x@<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span>/xmr</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">Claymore CPU Miner</td>\n          <td>CPU</td>\n          <td>\n            <a target=\"_blank\" href=\"https://mega.co.nz/#F!Hg4g1bLT!4Upg8GNiEZYCaZ04XVh_yg\">MEGA</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://bitcointalk.org/index.php?topic=647251.0\">BitcoinTalk</a>\n          </td>\n          <td>私有\n            <i class=\"fa fa-frown-o\"></i>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>NsCpuCNMiner64 -o stratum+tcp://<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span> -u <span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span> -p x</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">Claymore GPU Miner</td>\n          <td>OpenCL (AMD)</td>\n          <td>\n            <a target=\"_blank\" href=\"https://mega.co.nz/#F!e4JVEAIJ!l1iF4z10fMyJzY5-LnyC2A\">MEGA</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://bitcointalk.org/index.php?topic=638915.0\">Discussion</a>\n          </td>\n          <td>私有\n            <i class=\"fa fa-frown-o\"></i>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>NsGpuCNMiner -o stratum+tcp://<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span> -u <span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span> -p x</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">ccminer (forked by tsiv)</td>\n          <td>CUDA (Nvidia)</td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/tsiv/ccminer-cryptonight/releases\">Github</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://bitcointalk.org/index.php?topic=656841.msg7487737#msg7487737\">BitcoinTalk</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/tsiv/ccminer-cryptonight\">Github</a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>ccminer -o stratum+tcp://<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span> -u <span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span> -p x</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"miningAppTitle\">xmrMiner</td>\n          <td>CUDA (Nvidia)</td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/xmrMiner/xmrMiner-Win64\">Github</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://forum.getmonero.org/13/mining-software-and-pools/87576/xmrminer-a-new-high-optimized-nvidia-gpu-miner\">Forum</a>\n          </td>\n          <td>\n            <a target=\"_blank\" href=\"https://github.com/xmrMiner/xmrMiner\">Github</a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n            <span>示例:</span>\n            <code>xmrMiner_0.2.0.exe --url=stratum+tcp://<span class=\"exampleHost\">{{host}}</span>:<span class=\"examplePort\">{{port}}</span> -u <span class=\"exampleAddress\">YOUR_WALLET_ADDRESS</span> -p x --bfactor=8 --bsleep=100</code>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent(dataService) {
        this.dataService = dataService;
    }
    GetStartedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        var pool = this.dataService.getCurrentPool();
        this.host = pool[2].pool.host;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.ports = _this.status.config.ports;
                var index = Math.floor(Math.random() * 100) % 3;
                _this.port = _this.ports[index].port;
            }
        });
    };
    GetStartedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-get-started',
            template: __webpack_require__("../../../../../src/app/get-started/get-started.component.html"),
            styles: [__webpack_require__("../../../../../src/app/get-started/get-started.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], GetStartedComponent);
    return GetStartedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"siteInfo\">\n    <!-- Description or information about this pool -->\n  </div>\n\n  <app-status [status]=\"status\">\n  </app-status>\n\n  <app-caculator [status]=\"status\">\n  </app-caculator>\n  <app-user [data]=\"status\">\n  </app-user>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.title = '田一块 VIG 矿池';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial Get status
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.updateStatus();
            }
        });
        // Periodical Get status
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__["a" /* interval */])(this.dataService.config.interval || 10000).subscribe(function (v) {
            _this.dataService.getLiveStatus().subscribe(function (data) {
                if (Object.keys(data).length > 0) {
                    _this.status = data;
                    _this.updateStatus();
                }
            });
        });
    };
    HomeComponent.prototype.updateStatus = function () {
        this.status.network.hashrate = this.status.network.difficulty / this.status.config.coinDifficultyTarget;
        this.status.network.hashrateReadable = this.dataService.hashRateWithUnit(this.status.network.difficulty / this.status.config.coinDifficultyTarget);
        this.status.network.lastBlockTime = this.dataService.timeAgo(this.status.network.timestamp);
        this.status.network.lastReward = this.dataService.getReadableCoins(this.status, this.status.network.reward, 4);
        this.status.network.lastHashExplorerUrl = this.dataService.hashToUrl(this.status, this.status.network.hash);
        this.status.pool.hashrateReadable = this.dataService.hashRateWithUnit(this.status.pool.hashrate);
        this.status.pool.lastBlockTime = this.dataService.timeAgo(this.status.pool.lastBlockFound / 1000);
        this.status.pool.blockTime = this.dataService.getReadableTime(this.status.network.difficulty / this.status.pool.hashrate);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .paymentsStatHolder > span{\n        display: inline-block;\n        border-radius: 5px;\n        padding: 1px 9px;\n        border: 1px solid #e5e5e5;\n        margin: 2px;\n    }\n    .paymentsStatHolder > span > span{\n        font-weight: bold;\n    }\n    #payments_rows > tr > td{\n        vertical-align: middle;\n        font-family: 'Inconsolata', monospace;\n        font-size: 0.95em;\n        text-align: center;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">切换</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand active\" routerLink=\"/home\">\n        <span>{{coinName}}</span> 矿池</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/home\">\n            <i class=\"fa fa-home\"></i> 主页\n          </a>\n        </li>\n\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/getting_started\">\n            <i class=\"fa fa-rocket\"></i> 开挖\n          </a>\n        </li>\n\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/blocks/pool\">\n            <i class=\"fa fa-cubes\"></i> 矿池块\n          </a>\n        </li>\n\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/payments\">\n            <i class=\"fa fa-paper-plane-o\"></i> 支付\n          </a>\n        </li>\n\n        <!-- //-->\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/blockchain\">\n            <i class=\"fa fa-cubes\"></i> 区块链\n          </a>\n        </li>\n\n        <li style=\"display:none;\">\n          <a class=\"hot_link\" data-page=\"blockchain_block.html\" href=\"#blockchain_block\">\n          </a>\n        </li>\n\n        <li style=\"display:none;\">\n          <a class=\"hot_link\" data-page=\"blockchain_transaction.html\" href=\"#blockchain_transaction\">\n          </a>\n        </li>\n        <!-- //-->\n\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/networks\">\n            <i class=\"fa fa-chain\"></i> 网络\n          </a>\n        </li>\n\n        <li [routerLinkActive]=\"['active']\">\n          <a routerLink=\"/contact\">\n            <i class=\"fa fa-comments\"></i> 支持\n          </a>\n        </li>\n\n\n        <li>\n          <a href=\"https://github.com/vigcoin/wiki\" target=\"_blank\">\n            <i class=\"fa fa-book\"></i> WIKI\n          </a>\n        </li>\n      </ul>\n      <div id=\"stats_updated\">状态已经更新 &nbsp;\n        <i class=\"fa fa-bolt\"></i>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
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

var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent(cdr) {
        this.cdr = cdr;
        this.coinName = 'VIG Coin';
    }
    NavigatorComponent.prototype.ngOnInit = function () {
    };
    NavigatorComponent.prototype.ngOnChanges = function () {
        if (this.data && this.data.config.coin) {
            this.cdr.detectChanges();
            // this.coinName = this.data.config.coin;
            var updates_1 = $('#stats_updated');
            updates_1.css('transition', 'opacity 100ms ease-out');
            updates_1.css('opacity', 1);
            setTimeout(function () {
                updates_1.css('transition', 'opacity 7000ms linear');
                updates_1.css('opacity', 0);
            }, 500);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('status'),
        __metadata("design:type", Object)
    ], NavigatorComponent.prototype, "data", void 0);
    NavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navigator',
            template: __webpack_require__("../../../../../src/app/navigator/navigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigator/navigator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networks/networks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    #network_rows>tr>td {\n      vertical-align: middle;\n      font-family: 'Inconsolata', monospace;\n      font-size: 0.95em;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networks/networks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th><span id=\"network-symbol\"></span> 矿池</th>\n          <th><i class=\"fa fa-bars\"></i> 高度</th>\n          <th><i class=\"fa fa-tachometer\"></i> 算力</th>\n          <th><i class=\"fa fa-group\"></i> 矿工</th>\n          <th><i class=\"fa fa-money\"></i> 总费用</th>\n          <th><i class=\"fa fa-clock-o\"></i> 最新区块</th>\n        </tr>\n      </thead>\n      <tbody id=\"network_rows\">\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/networks/networks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworksComponent = /** @class */ (function () {
    function NetworksComponent(dataService) {
        this.dataService = dataService;
    }
    NetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.init();
            }
        });
    };
    NetworksComponent.prototype.calculateTotalFee = function (config) {
        var totalFee = config.config.fee;
        for (var property in config.config.donation) {
            if (config.config.donation.hasOwnProperty(property)) {
                totalFee += config.config.donation[property];
            }
        }
        return totalFee;
    };
    NetworksComponent.prototype.init = function () {
        var _this = this;
        var curHost = location.host;
        var NETWORK_STAT_MAP = new Map(this.dataService.config.networkStat[this.status.config.symbol.toLowerCase()]);
        NETWORK_STAT_MAP.forEach(function (url, host, map) {
            $.getJSON(url + '/stats', function (data, textStatus, jqXHR) {
                var isCurHost = host.toString().indexOf(curHost) >= 0;
                $('#network_rows').append('<tr>' +
                    '<td id=host-' + host + '><a target=blank href=http://'
                    + host + '>' + (isCurHost ? ('<code>' + host + '</code>') : host)
                    + '</a> (' + data.config.symbol + ')</td>' +
                    '<td id=height-' + host + '>' + data.network.height + '</td>' +
                    '<td id=hashrate-' + host + '>' + data.pool.hashrate + '&nbsp;H/s</td>' +
                    '<td id=miners-' + host + '>' + data.pool.miners + '</td>' +
                    '<td id=totalFee-' + host + '>' + _this.calculateTotalFee(data) + '%</td>' +
                    '<td id=lastBlockFound-' + host + '>' +
                    (data.pool.lastBlockFound ? new Date(parseInt(data.pool.lastBlockFound, 10)).toLocaleString()
                        : '尚未出块') + '</td>' +
                    '</tr>');
            });
        });
    };
    NetworksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-networks',
            template: __webpack_require__("../../../../../src/app/networks/networks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networks/networks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], NetworksComponent);
    return NetworksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/payments/payments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    span {\n      display: inline-block;\n      border-radius: 5px;\n      padding: 1px 9px;\n      border: 1px solid #e5e5e5;\n      margin: 2px;\n    }\n\n    #payments_rows>tr>td {\n      vertical-align: middle;\n      font-family: 'Inconsolata', monospace;\n      font-size: 0.95em;\n      text-align: center;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"paymentsStatHolder\">\n    <span class=\"bg-primary\">总支付: <b id=\"paymentsTotal\">{{status?.pool.totalPayments}}</b></span>\n    <span class=\"bg-info\">总矿工支付: <b id=\"paymentsTotalPaid\">{{status?.pool.totalMinersPaid}}</b></span>\n    <span class=\"bg-info\">最低支付门槛: <b id=\"paymentsMinimum\">{{status?.config.minPaymentThresholdText}}</b></span>\n    <span class=\"bg-info\">发放单元: <b id=\"paymentsDenomination\">{{status?.config.denominationUnitText}}</b></span>\n  </div>\n\n  <hr>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover table-striped\">\n      <thead>\n        <tr>\n          <th><i class=\"fa fa-clock-o\"></i> 发送时间</th>\n          <th><i class=\"fa fa-paw\"></i> 交易哈希</th>\n          <th><i class=\"fa fa-money\"></i> 数量</th>\n          <th><i class=\"fa fa-tag\"></i> 费用</th>\n          <th><i class=\"fa fa-sitemap\"></i> 混合</th>\n          <th><i class=\"fa fa-group\"></i> 支付接收方</th>\n        </tr>\n      </thead>\n      <tbody id=\"payments_rows\">\n\n      </tbody>\n    </table>\n  </div>\n\n  <p class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"loadMorePayments\" (click)=\"getMore()\">加载更多</button>\n  </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(dataService) {
        this.dataService = dataService;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.status.config.minPaymentThresholdText =
                    _this.dataService.getReadableCoins(_this.status, _this.status.config.minPaymentThreshold, 2);
                _this.status.config.denominationUnitText =
                    _this.dataService.getReadableCoins(_this.status, _this.status.config.denominationUnit, 2);
                _this.renderPayments(_this.status.pool.payments);
            }
        });
    };
    PaymentsComponent.prototype.getMore = function () {
        var _this = this;
        this.dataService.getPayments({
            time: $('#payments_rows').children().last().data('time')
        }).subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.renderPayments(data);
            }
        });
    };
    PaymentsComponent.prototype.formatPaymentLink = function (hash) {
        return '<a href="' + this.dataService.getTransactionUrl(this.status, hash) + '">' + hash + '</a>';
    };
    PaymentsComponent.prototype.getPaymentCells = function (payment) {
        return '<td>' + this.dataService.formatDate(payment.time) + '</td>' +
            '<td>' + this.formatPaymentLink(payment.hash) + '</td>' +
            '<td>' + this.dataService.getReadableCoins(this.status, payment.amount, 4, true) + '</td>' +
            '<td>' + this.dataService.getReadableCoins(this.status, payment.fee, 4, true) + '</td>' +
            '<td>' + payment.mixin + '</td>' +
            '<td>' + payment.recipients + '</td>';
    };
    PaymentsComponent.prototype.getPaymentRowElement = function (payment, jsonString) {
        var row = document.createElement('tr');
        row.setAttribute('data-json', jsonString);
        row.setAttribute('data-time', payment.time);
        row.setAttribute('id', 'paymentRow' + payment.time);
        row.innerHTML = this.getPaymentCells(payment);
        return row;
    };
    PaymentsComponent.prototype.parsePayment = function (time, serializedPayment) {
        var parts = serializedPayment.split(':');
        return {
            time: parseInt(time, 10),
            hash: parts[0],
            amount: parts[1],
            fee: parts[2],
            mixin: parts[3],
            recipients: parts[4]
        };
    };
    PaymentsComponent.prototype.renderPayments = function (paymentsResults) {
        var $paymentsRows = $('#payments_rows');
        for (var i = 0; i < paymentsResults.length; i += 2) {
            var payment = this.parsePayment(paymentsResults[i + 1], paymentsResults[i]);
            var paymentJson = JSON.stringify(payment);
            var existingRow = document.getElementById('paymentRow' + payment.time);
            if (existingRow && existingRow.getAttribute('data-json') !== paymentJson) {
                $(existingRow).replaceWith(this.getPaymentRowElement(payment, paymentJson));
            }
            else if (!existingRow) {
                var paymentElement = this.getPaymentRowElement(payment, paymentJson);
                var inserted = false;
                var rows = $paymentsRows.children().get();
                for (var f = 0; f < rows.length; f++) {
                    var pTime = parseInt(rows[f].getAttribute('data-time'), 10);
                    if (pTime < payment.time) {
                        inserted = true;
                        $(rows[f]).before(paymentElement);
                        break;
                    }
                }
                if (!inserted) {
                    $paymentsRows.append(paymentElement);
                }
            }
        }
    };
    PaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-payments',
            template: __webpack_require__("../../../../../src/app/payments/payments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pool-blocks/pool-blocks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .blocksStatHolder>span {\n      display: inline-block;\n      border-radius: 5px;\n      padding: 1px 9px;\n      border: 1px solid #e5e5e5;\n      margin: 2px;\n      border-width: 0;\n      padding: 6px 13px;\n    }\n\n    .blocksStatHolder>span>span {\n      font-weight: bold;\n    }\n\n    #blocks_rows>tr>td {\n      vertical-align: middle;\n      font-family: 'Inconsolata', monospace;\n      font-size: 0.95em;\n      text-align: center;\n    }\n\n    .luckGood {\n      color: darkgreen;\n    }\n\n    .luckBad {\n      color: darkred;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pool-blocks/pool-blocks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"blocksStatHolder\">\n    <span class=\"bg-primary\">全部挖出的块: <span id=\"blocksTotal\">{{status?.pool.totalBlocks}}</span></span>\n    <span class=\"bg-info\">成熟深度要求: <span id=\"blocksMaturityCount\">{{status?.config.depth}}</span></span>\n  </div>\n\n  <hr>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th><i class=\"fa fa-bars\"></i> 高度</th>\n          <th title=\"How many more blocks network must mine before this block is matured\"><i class=\"fa fa-link\"></i> 成熟度</th>\n          <th><i class=\"fa fa-unlock-alt\"></i> 难度</th>\n          <th><i class=\"fa fa-paw\"></i> 块哈希</th>\n          <th><i class=\"fa fa-clock-o\"></i> 发现时间</th>\n          <th><i class=\"fa fa-star-half-o\"></i> 份额/难度</th>\n        </tr>\n      </thead>\n      <tbody id=\"blocks_rows\">\n\n      </tbody>\n    </table>\n  </div>\n\n  <p class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"loadMoreBlocks\" (click)=\"getMore()\">加载更多</button>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pool-blocks/pool-blocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoolBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolBlocksComponent = /** @class */ (function () {
    function PoolBlocksComponent(dataService) {
        this.dataService = dataService;
    }
    PoolBlocksComponent.prototype.parseBlock = function (lastStats, height, serializedBlock) {
        var parts = serializedBlock.split(':');
        var block = {
            height: parseInt(height, 10),
            hash: parts[0],
            time: parts[1],
            difficulty: parseInt(parts[2], 10),
            shares: parseInt(parts[3], 10),
            orphaned: parts[4],
            reward: parts[5]
        };
        var toGo = lastStats.config.depth - (lastStats.network.height - block.height);
        block.maturity = toGo < 1 ? '' : (toGo + ' to go');
        switch (block.orphaned) {
            case '0':
                block.status = 'unlocked';
                break;
            case '1':
                block.status = 'orphaned';
                break;
            default:
                block.status = 'pending';
                break;
        }
        return block;
    };
    PoolBlocksComponent.prototype.formatLuck = function (lastStats, difficulty, shares) {
        var accurateShares;
        // accurateShares is only an approximation to reverse the calcualtions done in pool.js,
        // because the shares with their respective are not recorded in redis
        // Approximation assumes equal pool hashrate for the whole round
        // Could potentially be replaced by storing the sum of all job.difficulty in the redis db.
        if (lastStats.config.slushMiningEnabled) {
            accurateShares = shares / (1 / lastStats.config.blockTime * (lastStats.config.weight - lastStats.config.weight *
                Math.pow(Math.E, ((lastStats.config.blockTime * (-1)) / lastStats.config.weight))));
        }
        else {
            accurateShares = shares;
        }
        if (difficulty > accurateShares) {
            var percent = 100 - Math.round(accurateShares / difficulty * 100);
            return '<span class="luckGood">' + percent + '%</span>';
        }
        else {
            var percent = (100 - Math.round(difficulty / accurateShares * 100)) * -1;
            return '<span class="luckBad">' + percent + '%</span>';
        }
    };
    PoolBlocksComponent.prototype.formatBlockLink = function (hash) {
        return '<a target="_blank" href="' + this.dataService.getBlockchainUrl(this.status, hash) + '">' + hash + '</a>';
    };
    PoolBlocksComponent.prototype.getBlockRowElement = function (lastStats, block, jsonString) {
        var blockStatusClasses = {
            'pending': '',
            'unlocked': 'success',
            'orphaned': 'danger'
        };
        var row = document.createElement('tr');
        row.setAttribute('data-json', jsonString);
        row.setAttribute('data-height', block.height);
        row.setAttribute('id', 'blockRow' + block.height);
        row.setAttribute('title', block.status);
        row.className = blockStatusClasses[block.status];
        var columns = '<td>' + block.height + '</td>' +
            '<td>' + block.maturity + '</td>' +
            '<td>' + block.difficulty + '</td>' +
            '<td>' + this.formatBlockLink(block.hash) + '</td>' +
            '<td>' + this.dataService.formatDate(block.time) + '</td>' +
            '<td>' + this.formatLuck(this.status, block.difficulty, block.shares) + '</td>';
        row.innerHTML = columns;
        return row;
    };
    PoolBlocksComponent.prototype.renderBlocks = function (lastStats, blocksResults) {
        var $blocksRows = $('#blocks_rows');
        for (var i = 0; i < blocksResults.length; i += 2) {
            var block = this.parseBlock(lastStats, blocksResults[i + 1], blocksResults[i]);
            var blockJson = JSON.stringify(block);
            var existingRow = document.getElementById('blockRow' + block.height);
            if (existingRow && existingRow.getAttribute('data-json') !== blockJson) {
                $(existingRow).replaceWith(this.getBlockRowElement(lastStats, block, blockJson));
            }
            else if (!existingRow) {
                var blockElement = this.getBlockRowElement(lastStats, block, blockJson);
                var inserted = false;
                var rows = $blocksRows.children().get();
                for (var f = 0; f < rows.length; f++) {
                    var bHeight = parseInt(rows[f].getAttribute('data-height'), 10);
                    if (bHeight < block.height) {
                        inserted = true;
                        $(rows[f]).before(blockElement);
                        break;
                    }
                }
                if (!inserted) {
                    $blocksRows.append(blockElement);
                }
            }
        }
    };
    PoolBlocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.dataService.config;
        this.dataService.getStatus().subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.status = data;
                _this.renderBlocks(_this.status, _this.status.pool.blocks);
            }
        });
    };
    PoolBlocksComponent.prototype.getMore = function () {
        var _this = this;
        this.dataService.getBlocks({ height: $('#blocks_rows').children().last().data('height') }).subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.renderBlocks(_this.status, data);
            }
        });
    };
    PoolBlocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pool-blocks',
            template: __webpack_require__("../../../../../src/app/pool-blocks/pool-blocks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pool-blocks/pool-blocks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], PoolBlocksComponent);
    return PoolBlocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_started_get_started_component__ = __webpack_require__("../../../../../src/app/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pool_blocks_pool_blocks_component__ = __webpack_require__("../../../../../src/app/pool-blocks/pool-blocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payments_payments_component__ = __webpack_require__("../../../../../src/app/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blockchain_blockchain_component__ = __webpack_require__("../../../../../src/app/blockchain/blockchain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__networks_networks_component__ = __webpack_require__("../../../../../src/app/networks/networks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_statistics_statistics_component__ = __webpack_require__("../../../../../src/app/admin/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_monitoring_monitoring_component__ = __webpack_require__("../../../../../src/app/admin/monitoring/monitoring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_userslist_userslist_component__ = __webpack_require__("../../../../../src/app/admin/userslist/userslist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'getting_started', component: __WEBPACK_IMPORTED_MODULE_4__get_started_get_started_component__["a" /* GetStartedComponent */] },
    { path: 'payments', component: __WEBPACK_IMPORTED_MODULE_6__payments_payments_component__["a" /* PaymentsComponent */] },
    { path: 'blocks/pool', component: __WEBPACK_IMPORTED_MODULE_5__pool_blocks_pool_blocks_component__["a" /* PoolBlocksComponent */] },
    { path: 'blockchain', component: __WEBPACK_IMPORTED_MODULE_7__blockchain_blockchain_component__["a" /* BlockchainComponent */] },
    { path: 'networks', component: __WEBPACK_IMPORTED_MODULE_8__networks_networks_component__["a" /* NetworksComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'admin', redirectTo: 'admin/statistics', pathMatch: 'full' },
    { path: 'admin/statistics', component: __WEBPACK_IMPORTED_MODULE_10__admin_statistics_statistics_component__["a" /* StatisticsComponent */] },
    { path: 'admin/monitoring', component: __WEBPACK_IMPORTED_MODULE_11__admin_monitoring_monitoring_component__["a" /* MonitoringComponent */] },
    { path: 'admin/userslist', component: __WEBPACK_IMPORTED_MODULE_12__admin_userslist_userslist_component__["a" /* UserslistComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#lastHash {\n    display: inline-block;\n    width: 230px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 0.8em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 stats\">\n    <h3>全网</h3>\n    <div>\n      <i class=\"fa fa-tachometer\"></i> 算力:\n      <span id=\"networkHashrate\">{{data?.network.hashrateReadable}} / 秒</span>\n    </div>\n    <div>\n      <i class=\"fa fa-clock-o\"></i> 最后块:\n      <span id=\"networkLastBlockFound\">{{data?.network.lastBlockTime}}</span>\n    </div>\n    <div>\n      <i class=\"fa fa-unlock-alt\"></i> 难度:\n      <span id=\"networkDifficulty\">{{data?.network.difficulty}}</span>\n    </div>\n    <div>\n      <i class=\"fa fa-bars\"></i> 块高度:\n      <span id=\"blockchainHeight\">{{data?.network.height}}</span>\n    </div>\n    <div>\n      <i class=\"fa fa-money\"></i> 最新奖励:\n      <span id=\"networkLastReward\">{{data?.network.lastReward}}</span>\n    </div>\n    <div>\n      <i class=\"fa fa-paw\"></i> 最新哈希:\n      <a id=\"lastHash\" target=\"_blank\" href=\"{{data?.network.lastHashExplorerUrl}}\">{{data?.network.hash}}</a>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 stats\">\n    <h3>\n      当前矿池\n      <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"true\">\n          {{currentPool[2].desc}}\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\n          <li *ngFor=\"let pool of pools; let i = index\" (click)=\"onClick(i)\">\n            <a href=\"#\" title=\"{{pool[2].desc}}\">{{pool[2].desc}} | {{pool[1]}}</a>\n          </li>\n        </ul>\n      </div>\n    </h3>\n    <div>\n      <i class=\"fa fa-tachometer\"></i> 算力:\n      <span id=\"poolHashrate\">{{data?.pool.hashrateReadable}} / 秒</span>\n    </div>\n    <div>\n      <i class=\"fa fa-clock-o\"></i> 最后块:\n      <span id=\"poolLastBlockFound\">{{data?.pool.lastBlockTime || \"尚未出块\"}}</span>\n    </div>\n    <div>\n      <i class=\"fa fa-users\"></i> 在线矿工:\n      <span id=\"poolMiners\">{{data?.pool.miners}}</span>\n    </div>\n    <!-- <div id=\"donations\"><i class=\"fa fa-gift\"></i> 捐赠: <span id=\"poolDonations\"></span></div> -->\n    <div>\n      <i class=\"fa fa-money\"></i> 全部矿池费用:\n      <span id=\"poolFee\">{{data?.config.fee}}%</span>\n    </div>\n    <div>\n      <i class=\"fa fa-history\"></i> 每个找到的块:\n      <span id=\"blockSolvedTime\">{{data?.pool.blockTime}}</span> (估计时间)</div>\n  </div>\n\n  <div class=\"col-md-4 stats marketRate\">\n    <h3 id=\"marketHeader\">市场</h3>\n    <div class=\"marketFooter\">更新:\n      <span id=\"marketLastUpdated\"></span>\n    </div>\n    <div class=\"marketFooter\">Powered by\n      <a href=\"https://www.cryptonator.com/\">Cryptonator</a>\n    </div>\n  </div>\n</div>\n\n<!-- <hr> -->\n\n<div class=\"row chartsPoolStat hidden\">\n  <div class=\"col-sm-2 chartWrap\">\n    <h4>哈希/美元\n      <span data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"奖励 * 比率 / 难度\">\n        <i class=\"fa fa-question-circle\"></i>\n      </span>\n    </h4>\n    <div id=\"chartHashUsd\" data-chart=\"profit\">\n      <div class=\"chart\"></div>\n      <!-- <p class=\"text-center\" id=\"cur_profit\">-</p> -->\n    </div>\n  </div>\n  <div class=\"col-sm-20 chartWrap\">\n    <h4>美元价格</h4>\n    <div id=\"chartPriceUsd\" data-chart=\"price\">\n      <div class=\"chart\"></div>\n      <!-- <p class=\"text-center\" id=\"cur_price\">-</p> -->\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <h4 class=\"text-center\">难度</h4>\n    <div id=\"chartDifficulty\" data-chart=\"diff\">\n      <div class=\"chart\"></div>\n      <!-- <p class=\"text-center\" id=\"cur_diff\">-</p> -->\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4 class=\"text-center\">算力</h4>\n    <div id=\"chartHashrate\" data-chart=\"hashrate\">\n      <div class=\"chart\"></div>\n      <!-- <p class=\"text-center\" id=\"cur_hashrate\">-</p> -->\n    </div>\n  </div>\n  <div class=\"col-sm-4 chartWrap\">\n    <h4 class=\"text-center\">矿工</h4>\n    <div id=\"chartWorkers\" data-chart=\"workers\">\n      <div class=\"chart\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = /** @class */ (function () {
    function StatusComponent(dataService) {
        this.dataService = dataService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        console.log('inside status');
        console.log(this.data);
        this.pools = this.dataService.getPools();
        if (this.pools.length) {
            this.currentPool = this.dataService.getCurrentPool();
        }
    };
    StatusComponent.prototype.ngOnChanges = function () {
        console.log('inside status change');
        console.log(this.data);
        if (this.data && Object.keys(this.data).length > 0) {
            this.createCharts(this.data);
        }
    };
    StatusComponent.prototype.getGraphData = function (rawData, fixValueToCoins) {
        var graphData = {
            names: [],
            values: []
        };
        if (rawData) {
            for (var i = 0, xy = void 0; xy = rawData[i]; i++) {
                graphData.names.push(new Date(xy[0] * 1000).toLocaleString());
                graphData.values.push(fixValueToCoins ? this.getReadableCoins(xy[1], 4, true) : xy[1]);
            }
        }
        return graphData;
    };
    StatusComponent.prototype.getReadableCoins = function (coins, digits, withoutSymbol) {
        if (withoutSymbol === void 0) { withoutSymbol = null; }
        var amount = (parseInt(coins || 0, 10) / this.data.config.coinUnits)
            .toFixed(digits || this.data.config.coinUnits.toString().length - 1);
        return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
    };
    StatusComponent.prototype.createCharts = function (data) {
        var currencyGraphStat = {
            type: 'line',
            width: '100%',
            height: '75',
            lineColor: '#03a678',
            fillColor: 'rgba(3, 166, 120, .3)',
            spotColor: null,
            minSpotColor: null,
            maxSpotColor: null,
            highlightLineColor: '#236d26',
            spotRadius: 3,
            chartRangeMin: 0,
            drawNormalOnTop: false,
            tooltipFormat: '<p style="margin-right:10px">{{y}} , {{offset:names}}</p>'
        };
        if (data.hasOwnProperty('charts')) {
            var graphData = {
                profit: this.getGraphData(data.charts.profit),
                diff: this.getGraphData(data.charts.difficulty),
                hashrate: this.getGraphData(data.charts.hashrate),
                price: this.getGraphData(data.charts.price),
                workers: this.getGraphData(data.charts.workers)
            };
            for (var graphType in graphData) {
                if (graphData[graphType].values.length > 1) {
                    var settings = currencyGraphStat;
                    settings.tooltipValueLookups = { names: graphData[graphType].names };
                    var $chart = $('[data-chart=' + graphType + '] .chart');
                    $chart.closest('.chartWrap').show();
                    $chart.sparkline(graphData[graphType].values, settings);
                }
            }
        }
    };
    StatusComponent.prototype.onClick = function (index) {
        this.dataService.selectPool(index);
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('status'),
        __metadata("design:type", Object)
    ], StatusComponent.prototype, "data", void 0);
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-status',
            template: __webpack_require__("../../../../../src/app/status/status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"stats\">\n    <h3>你的状态和支付历史</h3>\n\n    <div class=\"input-group\">\n      <input class=\"form-control\" id=\"yourStatsInput\" type=\"text\" [(ngModel)]=\"address\" (change)=\"onAddressChange()\" placeholder=\"输入你的钱包地址\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\" id=\"lookUp\">\n          <span (click)=\"queryAddress()\" *ngIf=\"!isQuery\">\n            <i class=\"fa fa-search\"></i> 查询</span>\n          <span *ngIf=\"isQuery\">\n            <i class=\"fa fa-refresh fa-spin\"></i> 搜索...</span>\n        </button>\n      </span>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\" *ngIf=\"address\">\n  <div class=\"col-sm-4 stats\">\n    <div id=\"addressError\"></div>\n    <!-- <div class=\"yourStats\"><i class=\"fa fa-key\"></i> Address: <span id=\"yourAddressDisplay\"></span></div> -->\n    <div class=\"yourStats\">\n      <i class=\"fa fa-bank\"></i> 未支付:\n      <span id=\"yourPendingBalance\">{{status?.stats?.balanceText || \"0.0\"}}</span>\n    </div>\n    <div class=\"yourStats\">\n      <i class=\"fa fa-money\"></i> 全部已支付:\n      <span id=\"yourPaid\">{{status?.stats?.paidText || \"0.0\"}}</span>\n    </div>\n    <div class=\"yourStats\">\n      <i class=\"fa fa-clock-o\"></i> 最后提交分额:\n      <span id=\"yourLastShare\">{{status?.stats?.lastShareTime || \"0.0\"}}</span>\n    </div>\n    <div class=\"yourStats\">\n      <i class=\"fa fa-tachometer\"></i> 算力:\n      <span id=\"yourHashrateHolder\">{{status?.stats?.hashrate || \"0.0\"}} / 秒</span>\n    </div>\n    <div class=\"yourStats\">\n      <i class=\"fa fa-cloud-upload\"></i> 总哈希提交:\n      <span id=\"yourHashes\">{{status?.stats?.hashes || \"0\"}}</span>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"userChart\" data-chart=\"user_hashrate\">\n      <h4>算力</h4>\n      <div class=\"chart\">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"userChart\" data-chart=\"user_payments\">\n      <h4>支付</h4>\n      <div class=\"chart\">\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"address\">\n  <br class=\"yourStats\">\n\n  <h4 class=\"yourStats\">支付</h4>\n  <div class=\"yourStats table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>\n            <i class=\"fa fa-clock-o\"></i> 发送时间</th>\n          <th>\n            <i class=\"fa fa-paw\"></i> 交易哈希</th>\n          <th>\n            <i class=\"fa fa-money\"></i> 数量</th>\n          <th>\n            <i class=\"fa fa-sitemap\"></i> 合并</th>\n        </tr>\n      </thead>\n      <tbody id=\"payments_rows\">\n\n      </tbody>\n    </table>\n  </div>\n  <p class=\"yourStats text-center\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"loadMorePayments\" (click)=\"loadMore()\">加载更多</button>\n  </p>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocCookies = /** @class */ (function () {
    function DocCookies() {
    }
    DocCookies.prototype.getItem = function (key) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
            encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };
    DocCookies.prototype.setItem = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (sPath === void 0) { sPath = ''; }
        if (sDomain === void 0) { sDomain = ''; }
        if (bSecure === void 0) { bSecure = false; }
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                    break;
                case String:
                    sExpires = '; expires=' + vEnd;
                    break;
                case Date:
                    sExpires = '; expires=' + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + '=' +
            encodeURIComponent(sValue) + sExpires + (sDomain
            ? '; domain=' + sDomain
            : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
        return true;
    };
    DocCookies.prototype.removeItem = function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey)
            + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
            + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
        return true;
    };
    DocCookies.prototype.hasItem = function (sKey) {
        return (new RegExp('(?:^|;\\s*)'
            + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&')
            + '\\s*\\=')).test(document.cookie);
    };
    DocCookies = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], DocCookies);
    return DocCookies;
}());

var UserComponent = /** @class */ (function () {
    function UserComponent(dataService, docCookies) {
        this.dataService = dataService;
        this.docCookies = docCookies;
        this.isQuery = false;
        this.address = this.docCookies.getItem('mining_address');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.address) {
            this.getAddressStatus(this.address);
        }
        // Periodical Get Address Info
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__["a" /* interval */])(this.dataService.config.interval || 10000).subscribe(function (v) {
            console.log('v = ' + v);
            if (_this.address) {
                _this.getAddressStatus(_this.address);
            }
        });
    };
    UserComponent.prototype.onAddressChange = function () {
        this.dataService.clearAddressStatus();
        this.docCookies.setItem('mining_address', this.address, Infinity);
    };
    UserComponent.prototype.queryAddress = function () {
        this.dataService.clearAddressStatus();
        this.getAddressStatus(this.address);
    };
    UserComponent.prototype.getAddressStatus = function (address) {
        var _this = this;
        this.docCookies.setItem('mining_address', address, Infinity);
        this.isQuery = true;
        this.dataService.getAddressStatus({ address: this.address, longpoll: false }).subscribe(function (data) {
            _this.isQuery = false;
            console.log(data);
            if (data && !data['error'] && Object.keys(data).length > 0) {
                _this.status = data;
                _this.status.stats.lastShareTime = _this.dataService.timeAgo(_this.status.stats.lastShare);
                _this.status.stats.paidText = _this.dataService.getReadableCoins(_this.data, _this.status.stats.paid, 4);
                _this.status.stats.balanceText = _this.dataService.getReadableCoins(_this.data, _this.status.stats.balance, 4);
                _this.status.stats.hashrate = _this.status.stats.hashrate || '0 H';
                _this.createUserCharts(_this.data, data);
                _this.renderPayments(_this.status.payments);
            }
        });
    };
    UserComponent.prototype.parsePayment = function (time, serializedPayment) {
        var parts = serializedPayment.split(':');
        return {
            time: parseInt(time, 10),
            hash: parts[0],
            amount: parts[1],
            fee: parts[2],
            mixin: parts[3],
            recipients: parts[4]
        };
    };
    UserComponent.prototype.formatDate = function (time) {
        if (!time) {
            return '';
        }
        return new Date(parseInt(time, 10) * 1000).toLocaleString();
    };
    UserComponent.prototype.formatPaymentLink = function (hash) {
        return '<a href="' + this.dataService.hashToUrl(this.data, hash) + '">' + hash + '</a>';
    };
    UserComponent.prototype.getPaymentCells = function (payment) {
        return '<td>' + this.formatDate(payment.time) + '</td>' +
            '<td>' + this.formatPaymentLink(payment.hash) + '</td>' +
            '<td>' + this.dataService.getReadableCoins(this.data, payment.amount, 4, true) + '</td>' +
            '<td>' + payment.mixin + '</td>';
    };
    UserComponent.prototype.getPaymentRowElement = function (payment, jsonString) {
        var row = document.createElement('tr');
        row.setAttribute('data-json', jsonString);
        row.setAttribute('data-time', payment.time);
        row.setAttribute('id', 'paymentRow' + payment.time);
        row.innerHTML = this.getPaymentCells(payment);
        return row;
    };
    UserComponent.prototype.renderPayments = function (paymentsResults) {
        var $paymentsRows = $('#payments_rows');
        for (var i = 0; i < paymentsResults.length; i += 2) {
            var payment = this.parsePayment(paymentsResults[i + 1], paymentsResults[i]);
            var paymentJson = JSON.stringify(payment);
            var existingRow = document.getElementById('paymentRow' + payment.time);
            if (existingRow && existingRow.getAttribute('data-json') !== paymentJson) {
                $(existingRow).replaceWith(this.getPaymentRowElement(payment, paymentJson));
            }
            else if (!existingRow) {
                var paymentElement = this.getPaymentRowElement(payment, paymentJson);
                var inserted = false;
                var rows = $paymentsRows.children().get();
                for (var f = 0; f < rows.length; f++) {
                    var pTime = parseInt(rows[f].getAttribute('data-time'), 10);
                    if (pTime < payment.time) {
                        inserted = true;
                        $(rows[f]).before(paymentElement);
                        break;
                    }
                }
                if (!inserted) {
                    $paymentsRows.append(paymentElement);
                }
            }
        }
    };
    UserComponent.prototype.createUserCharts = function (status, data) {
        var userGraphStat = {
            hashrate: {
                type: 'line',
                width: '100%',
                height: '180',
                lineColor: '#03a678',
                fillColor: 'rgba(3, 166, 120, .3)',
                spotColor: null,
                minSpotColor: null,
                maxSpotColor: null,
                highlightLineColor: '#236d26',
                spotRadius: 3,
                drawNormalOnTop: false,
                chartRangeMin: 0,
                tooltipFormat: '<b>{{y}}</b>, {{offset:names}}'
            },
            payments: {
                type: 'line',
                width: '100%',
                height: '180',
                lineColor: '#03a678',
                fillColor: 'rgba(3, 166, 120, .3)',
                spotColor: null,
                minSpotColor: null,
                maxSpotColor: null,
                highlightLineColor: '#236d26',
                spotRadius: 3,
                drawNormalOnTop: false,
                chartRangeMin: 0,
                tooltipFormat: '<b>{{y}}</b>, {{offset:names}}'
            }
        };
        for (var chart in userGraphStat) {
            if (data['charts'][chart] && data['charts'][chart].length) {
                var graphData = this.getGraphData(status, data['charts'][chart], chart === 'payments');
                userGraphStat[chart].tooltipValueLookups = { names: graphData.names };
                $('[data-chart=user_' + chart + ']').show().find('.chart').sparkline(graphData.values, userGraphStat[chart]);
            }
        }
    };
    UserComponent.prototype.getGraphData = function (status, rawData, fixValueToCoins) {
        var graphData = {
            names: [],
            values: []
        };
        if (rawData) {
            for (var i = 0, xy = void 0; xy = rawData[i]; i++) {
                graphData.names.push(new Date(xy[0] * 1000).toUTCString());
                graphData.values.push(fixValueToCoins ? this.dataService.getReadableCoins(status, xy[1], 4, true) : xy[1]);
            }
        }
        return graphData;
    };
    UserComponent.prototype.loadMore = function () {
        var _this = this;
        this.dataService.getPayments({
            address: this.address,
            time: $('#payments_rows').children().last().data('time')
        }).subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.renderPayments(data);
            }
            else {
                $('#loadMorePayments').text('没有更多的数据了!').prop('disabled', true);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "data", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], DocCookies])
    ], UserComponent);
    return UserComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map