import {PersonalFormPage}
  from "../page/index";

let personalFormPage: PersonalFormPage;

describe("Fill personal form", () => {
  before(() => {
    personalFormPage = new PersonalFormPage;
  });

  it("then the from should be filled", () => {
    // Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "hibarras@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      location: {
        state: "Rajasthan",
        city: "Jaipur",
      },
    };
    personalFormPage.visitPersonalFormPage();

    // Action
    personalFormPage.fillForm(personalInformation);
    // Assertion
  });
});
