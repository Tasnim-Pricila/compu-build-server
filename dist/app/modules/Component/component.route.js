"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentRouter = void 0;
const express_1 = __importDefault(require("express"));
const component_controller_1 = require("./component.controller");
exports.componentRouter = express_1.default.Router();
exports.componentRouter.post('/', component_controller_1.createComponent);
exports.componentRouter.get('/', component_controller_1.getComponent);
exports.componentRouter.get('/:id', component_controller_1.getComponentById);
exports.componentRouter.delete('/:id', component_controller_1.deleteComponentById);
exports.componentRouter.patch('/:id', component_controller_1.updateComponentById);
