const { test, expect } = require("@jest/globals");
const functions = require("./functions.js");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Is null?", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsey", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be Kevin as user", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Kevin",
    lastName: "Walorz",
  });
});

test("admin should be in userame", () => {
  usernames = ["admin", "kevin", "bob"];
  expect(usernames).toContain("admin");
});

test("User fetched named should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
