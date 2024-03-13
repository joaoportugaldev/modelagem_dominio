import { somar } from "../src"

test('Deve somar dois números', () => {
    expect(somar(2, 2)).toBe(4)
})