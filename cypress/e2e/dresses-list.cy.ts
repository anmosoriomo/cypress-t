import {MenuContentPage, DressesListPage}
  from "../page/index";

let menuContentPage: MenuContentPage;
let dressesListPage: DressesListPage;

describe("the user navigation to the dresses page should", () => {
  before(() => {
    menuContentPage = new MenuContentPage;
    dressesListPage = new DressesListPage;
  });

  it("show the available dresses", () => {
    // Arrange
    const dressesList = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToDressesMenu();

    // Assertion
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsName(dressesList);
  });
});
