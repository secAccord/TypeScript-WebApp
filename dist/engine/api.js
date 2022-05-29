"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api', (req, res) => {
    res.send('Hello API');
});
app.get('/api/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
});
exports.default = app;