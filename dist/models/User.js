"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var BaseModel_1 = require("./Base/BaseModel");
var User = (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = this;
        if (!data) {
            return _this;
        }
        _this = _super.call(this, data) || this;
        _this.name = String();
        _this.email = String();
        if (typeof data.name == 'string')
            _this.name = data.name;
        if (typeof data.email == 'string')
            _this.email = data.email;
        return _this;
    }
    return User;
}(BaseModel_1.BaseDataModel));
exports.User = User;
User.modelName = 'User';
//# sourceMappingURL=User.js.map