import {PersonalFormPage, personalInformation}
  from "../page/index";

describe("Fill personal form", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage;
  });

  it("then the from should be filled", () => {
    // Arrange
    personalFormPage.visitPersonalFormPage();

    // Action
    personalFormPage.fillForm(personalInformation);
    // Assertion
  });
});
