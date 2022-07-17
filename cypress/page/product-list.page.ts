class ProductListPage {
  private addToCartB: string;
  private tShirtItemList: string;

  constructor() {
    this.addToCartB = ".ajax_add_to_cart_button > span";
    this.tShirtItemList = ".product_list";
  }

  private findProductByName(tShirtName: string) {
    // Filter by text: .filter(':contains("Text")')
    return cy.get(this.tShirtItemList)
        .filter(`:contains("${tShirtName}")`);
  }

  public addProductToCart(tShirtName: string): void {
    this.findProductByName(tShirtName)
        .find(this.addToCartB).click();
  }
}

export {ProductListPage};
