import { verifyPassword, verifyUsername } from "../verify";
import { validate } from "../user";

jest.mock("../verify");

describe("validate", () => {
  test("should validate username and password", () => {
    // Arrange
    const username = "username";
    const password = "password";
    // Act
    const result = validate(username, password);
    // Assert
    expect(result).toBe(true);
    // expect(verifyUsername()).toHaveBeenCalledWith(username);
    // expect(verifyPassword()).toHaveBeenCalledWith(password);
  });
});
