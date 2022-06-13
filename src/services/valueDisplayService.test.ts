import valueDisplayService from "./valueDisplayService";

describe("valueDisplayService test => ", () => {
  it('Given value is "ADMIN", expect it returns "Admin"', () => {
    //Arrange
    const value = "ADMIN";
    //Act
    const result = valueDisplayService({ value: value });
    //Assert
    expect(result).toBe("Admin");
  });

  it('Given value is "admin", expect it returns "Admin"', () => {
    //Arrange
    const value = "admin";
    //Act
    const result = valueDisplayService({ value: value });
    //Assert
    expect(result).toBe("Admin");
  });

  it('Given value is "david" and onlyFirstLetter is true, expect it returns "D"', () => {
    //Arrange
    const value = "david";
    //Act
    const result = valueDisplayService({ value: value, onlyFirstLetter: true });
    //Assert
    expect(result).toBe("D");
  });
});
