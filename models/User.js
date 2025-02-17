"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class UserSchema extends mongoose_1.default.Schema {
    constructor() {
        super({
            fullName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            password: {
                type: String,
                required: true,
            },
            avatar: {
                type: String,
            },
            speciality: {
                type: String,
                required: true,
            },
            dateOfBirth: {
                type: String,
                required: true,
            },
            inpe: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
        });
    }
}
exports.default = mongoose_1.default.model("User", new UserSchema());
