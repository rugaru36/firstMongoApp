"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBManager = void 0;
var mongodb_1 = require("mongodb");
var MongoDBManager = (function () {
    function MongoDBManager() {
        this.connectUrl = 'mongodb+srv://rug4ru:rug4ru31415@cluster0.xil3n.mongodb.net';
        this.client = new mongodb_1.MongoClient(this.connectUrl);
        this.dbName = String();
    }
    MongoDBManager.prototype.setDbName = function (newName) {
        this.dbName = newName;
    };
    MongoDBManager.prototype.openConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.client.connect()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MongoDBManager.prototype.closeConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.client.close()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MongoDBManager.prototype.getAll = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.openConnection()];
                    case 1:
                        _a.sent();
                        db = this.client.db(this.dbName);
                        collection = db.collection(collectionName);
                        return [4, collection.find({}).toArray()];
                    case 2:
                        result = (_a.sent());
                        return [4, this.closeConnection()];
                    case 3:
                        _a.sent();
                        return [2, result];
                }
            });
        });
    };
    MongoDBManager.prototype.getById = function (id, collectionName) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.openConnection()];
                    case 1:
                        _b.sent();
                        db = this.client.db(this.dbName);
                        collection = db.collection(collectionName);
                        return [4, collection.findOne({ _id: new mongodb_1.ObjectId(id) })];
                    case 2:
                        result = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : null;
                        return [4, this.closeConnection()];
                    case 3:
                        _b.sent();
                        console.log({ result: result });
                        return [2, result];
                }
            });
        });
    };
    MongoDBManager.prototype.save = function (newElement, collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newElement.created = Date.now() / 1000;
                        newElement.updated = Date.now() / 1000;
                        return [4, this.openConnection()];
                    case 1:
                        _a.sent();
                        db = this.client.db(this.dbName);
                        collection = db.collection(collectionName);
                        return [4, collection.insertOne(newElement)];
                    case 2:
                        _a.sent();
                        return [4, this.closeConnection()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MongoDBManager.prototype.deleteAll = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.openConnection()];
                    case 1:
                        _a.sent();
                        db = this.client.db(this.dbName);
                        collection = db.collection(collectionName);
                        return [4, collection.deleteMany({})];
                    case 2:
                        _a.sent();
                        return [4, this.closeConnection()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MongoDBManager.prototype.updateById = function (id, dataToUpdate, collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.openConnection()];
                    case 1:
                        _a.sent();
                        db = this.client.db(this.dbName);
                        collection = db.collection(collectionName);
                        return [4, collection.updateOne({ '_id': new mongodb_1.ObjectId(id) }, dataToUpdate)];
                    case 2:
                        _a.sent();
                        return [4, this.closeConnection()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return MongoDBManager;
}());
exports.MongoDBManager = MongoDBManager;
//# sourceMappingURL=mongo.js.map