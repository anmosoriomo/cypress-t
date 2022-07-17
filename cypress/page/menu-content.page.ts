class MenuContentPage {
  private tShirtMenu: string;
  private dressesMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tShirtMenu = ".sf-menu > :nth-child(3) > a";
    this.dressesMenu = ".sf-menu > :nth-child(2) > .sf-with-ul";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}

export {MenuContentPage};
