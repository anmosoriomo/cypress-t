import {MenuContentPage, ProductListPage,
  ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage,
  validationMessage, productName, userId}
  from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage;
    productListPage = new ProductListPage;
    shoppingCartPage = new ShoppingCartPage;
    loginPage = new LoginPage;
    addressStepPage = new AddressStepPage;
    shippingStepPage = new ShippingStepPage;
    paymentStepPage = new PaymentStepPage;
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToTShirtMenu();
    productListPage.addProductToCart(productName);
    shoppingCartPage.goToShoppingCartMenu();
    shoppingCartPage.goToAuthenticationMenu();
    loginPage.fillIdFields(userId.email, userId.password);
    loginPage.goToUserMenu();
    addressStepPage.goToShippingMenu();
    shippingStepPage.markTermsOfServiceCheckbox();
    shippingStepPage.goToPaymentMethodMenu();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.goToConfirmOrderMenu();

    // Assertion
    paymentStepPage.validatePurchase(validationMessage);
  });
});
