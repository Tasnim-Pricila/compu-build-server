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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComponentByIdService = exports.deleteComponentByIdService = exports.getComponentByIdService = exports.getComponentService = exports.createComponentService = void 0;
const component_model_1 = require("./component.model");
const createComponentService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield component_model_1.Component.create(payload);
    return result;
});
exports.createComponentService = createComponentService;
const getComponentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield component_model_1.Component.find({});
    return result;
});
exports.getComponentService = getComponentService;
const getComponentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield component_model_1.Component.findById(id);
    return result;
});
exports.getComponentByIdService = getComponentByIdService;
const deleteComponentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield component_model_1.Component.findByIdAndDelete(id);
    return result;
});
exports.deleteComponentByIdService = deleteComponentByIdService;
const updateComponentByIdService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield component_model_1.Component.findByIdAndUpdate(id, data, { new: true });
    return result;
});
exports.updateComponentByIdService = updateComponentByIdService;
