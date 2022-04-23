it('test', () => {
	const sum = (a, b) => a + b;
	expect(sum(1, 2)).toBe(3);
	expect(sum(2, 2)).not.toBe(3);
});
