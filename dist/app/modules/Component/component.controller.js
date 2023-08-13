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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComponentById = exports.deleteComponentById = exports.getComponentById = exports.getComponent = exports.createComponent = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const response_1 = __importDefault(require("../../../shared/response"));
const http_status_1 = __importDefault(require("http-status"));
const component_service_1 = require("./component.service");
exports.createComponent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ComponentData = __rest(req.body, []);
    const result = yield (0, component_service_1.createComponentService)(ComponentData);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Component created successfully',
        data: result,
    });
}));
exports.getComponent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, component_service_1.getComponentService)();
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Component data retieved successfully',
        data: result,
    });
}));
exports.getComponentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, component_service_1.getComponentByIdService)(id);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Component data retieved successfully',
        data: result,
    });
}));
exports.deleteComponentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, component_service_1.getComponentByIdService)(id);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Component data deleted successfully',
        data: result,
    });
}));
exports.updateComponentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, component_service_1.updateComponentByIdService)(id, req.body);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Component data deleted successfully',
        data: result,
    });
}));
