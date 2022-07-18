class PersonalFormPage {
  private personalFormPageURL: string;
  private formFields: any;
  private submitBtn: string;

  constructor() {
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form/";
    this.submitBtn = "#submit";
    this.formFields = {
      nameInput: "#firstName",
      lastNameInput: "#lastName",
      emailInput: "#userEmail",
      genderInput: "[type='radio']",
      mobileNumberInput: "#userNumber",
      hobbiesInput: "[type='checkbox']", // checkboxes list
      addresInput: "#currentAddress",
      // location: {state: "", city: "",},
    };
  }

  public visitPersonalFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }

  public fillForm(personalInformation: any): void {
    cy.get(this.formFields.nameInput).type(personalInformation.name);
    cy.get(this.formFields.lastNameInput).type(personalInformation.lastName);
    cy.get(this.formFields.emailInput).type(personalInformation.email);
    // cy.get(this.formFields.genderInput)
    //     .check(personalInformation.gender);
    cy.get(this.formFields.genderInput)
        .check(personalInformation.gender, {force: true});
    cy.get(this.formFields.mobileNumberInput)
        .type(personalInformation.mobileNumber);

    const hobbies = personalInformation.hobbies;
    let aux: string;

    console.log(hobbies);

    hobbies.forEach((hobbie: string) => {
      switch (hobbie) {
        case "Sports":
          aux = "1";
          break;
        case "Reading":
          aux = "2";
          break;
        case "Music":
          aux = "3";
          break;
      }
      cy.get(this.formFields.hobbiesInput).check(aux, {force: true});
    });
  }
}

export {PersonalFormPage};
