describe("Fail test", () => {
  test("When setting the wrong expectation, the test should fail", async () => {
    expect(2 + 2).toBe(5);
  }, 100000);
});
