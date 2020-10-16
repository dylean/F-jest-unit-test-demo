import { verifyPassword } from "../verify";

describe("verifyPassword", () => {
  test("should return false when password length < 6", () => {
    // Arrange
    // 设置输入密码password的值为“12345”
    const password = "123456";
    // Act
    // 调用验证密码函数 verifyPassword(password)
    const result = verifyPassword(password);
    // Assert
    // 验证输出结果是否为false
    expect(result).toBe(false);
  });
});
