"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
exports.updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.enum([...user_constant_1.userRoleEnum]).optional(),
    }),
});
