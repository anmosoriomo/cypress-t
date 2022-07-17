import {MenuContentPage, ProductListPage,
  ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage}
  from "../page/index";

let menuContentPage: MenuContentPage;
let productListPage: ProductListPage;
let shoppingCartPage: ShoppingCartPage;
let loginPage: LoginPage;
let addressStepPage: AddressStepPage;
let shippingStepPage: ShippingStepPage;
let paymentStepPage: PaymentStepPage;

describe("Buy a t-shirt", () => {
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
    const validationMessage = "Your order on My Store is complete.";
    const userId = {
      email: "aperdomobo@gmail.com",
      password: "WorkshopProtractor",
    };
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToTShirtMenu();
    productListPage.addProductToCart();
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
