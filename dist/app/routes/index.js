"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_route_1 = require("../modules/Category/category.route");
const component_route_1 = require("../modules/Component/component.route");
const user_route_1 = require("../modules/User/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/category',
        routes: category_route_1.categoryRouter,
    },
    {
        path: '/component',
        routes: component_route_1.componentRouter,
    },
    {
        path: '/user',
        routes: user_route_1.userRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
