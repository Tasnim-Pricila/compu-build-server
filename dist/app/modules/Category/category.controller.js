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
exports.getCategory = exports.getCategoryByName = exports.getCategoryById = exports.createCategory = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const response_1 = __importDefault(require("../../../shared/response"));
const category_service_1 = require("./category.service");
const http_status_1 = __importDefault(require("http-status"));
exports.createCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CategoryData = __rest(req.body, []);
    const result = yield (0, category_service_1.createCategoryService)(CategoryData);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category created successfully',
        data: result,
    });
}));
exports.getCategoryById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, category_service_1.getCategoryByIdService)(id);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category data retieved successfully',
        data: result,
    });
}));
exports.getCategoryByName = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const result = yield (0, category_service_1.getCategoryByNameService)(name);
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category data retieved successfully',
        data: result,
    });
}));
exports.getCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, category_service_1.getCategoryService)();
    (0, response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category data retieved successfully',
        data: result,
    });
}));
