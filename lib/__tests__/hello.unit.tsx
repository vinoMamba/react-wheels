function add(a: number, b: number) {
    return a + b
}

describe('first test', () => {
    it('add(1,2) ==> 3', function () {
        expect(add(1, 2)).toEqual(3)
    });
})