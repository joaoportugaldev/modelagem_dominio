"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('Deve somar dois números', () => {
    expect((0, src_1.somar)(2, 2)).toBe(4);
});
