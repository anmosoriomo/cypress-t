import {Information, FormFields} from "../test-objects/personal-information";

class PersonalFormPage {
  private personalFormPageURL: string;
  private formFields: FormFields;
  private submitBtn: string;

  constructor() {
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form/";
    this.submitBtn = "#submit";
    this.formFields = {
      nameInput: "#firstName",
      lastNameInput: "#lastName",
      emailInput: "#userEmail",
      genderInput: "#genterWrapper div.custom-control > .custom-control-input",
      mobileNumberInput: "#userNumber",
      hobbiesInput: "#hobbiesWrapper div.custom-control > .custom-control-input",
      addresInput: "#currentAddress",
      // location: {state: "", city: "",},
    };
  }

  public visitPersonalFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }

  public fillForm(personalInformation: Information): void {
    let hob: string;

    cy.get(this.formFields.nameInput).type(personalInformation.name);
    cy.get(this.formFields.lastNameInput).type(personalInformation.lastName);
    cy.get(this.formFields.emailInput).type(personalInformation.email);
    // eslint-disable-next-line cypress/no-force
    cy.get(this.formFields.genderInput)
        .check(personalInformation.gender, {force: true});
    cy.get(this.formFields.mobileNumberInput)
        .type(`${personalInformation.mobileNumber}`);

    personalInformation.hobbies.forEach((hobbie) => {
      switch (hobbie) {
        case "Sports": hob = "1";
          break;
        case "Reading": hob = "2";
          break;
        case "Music": hob = "3";
          break;
      }
      // eslint-disable-next-line cypress/no-force
      cy.get(this.formFields.hobbiesInput).check(hob, {force: true});
    });
  }
}

export {PersonalFormPage};
