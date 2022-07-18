class ConfirmationPage {
  private personalFormPageURL: string;

  constructor() {
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form/";
  }

  public visitPersonalFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }
}

export {ConfirmationPage};

