import amazonConfig from "../utils/config";

export default class AmazonPage {
  baseURL = amazonConfig.amazon.baseUrl;
  searchInput = "#twotabsearchtextbox";
  searchButton = "#nav-search-submit-button";
  searchResultCard = "div[data-component-type='s-search-result']";
  quantitySelect = "#selectQuantity";
  quantityOption = "#a-popover-2";
  addToCartButton = "#add-to-cart-button";
  cartButton = "#a-button-input";
  deleteCartItemButton = "input[data-action='delete']";
  cartRemovedMessage = ".sc-list-item-removed-msg";

  visitPage() {
    cy.visit(this.baseURL);
  }

  typeSearchInput(keyword: string) {
    cy.get(this.searchInput).type(keyword);
    cy.wrap(keyword).as("keyword");
  }

  clickSearchButton() {
    cy.get(this.searchButton);
  }

  selectItem(itemName: string) {
    cy.contains(this.searchResultCard, itemName).click();
  }

  selectQuantity(quantity: number) {
    cy.get(this.quantitySelect).click();
    cy.contains(this.quantityOption, quantity).click();
  }

  clickAddToCartButton() {
    cy.get(this.addToCartButton).click();
  }

  clickCartButton() {
    cy.contains(this.cartButton, "Cart").click();
  }

  clickDeleteCartItemButton() {
    cy.get(this.deleteCartItemButton).click();
  }

  assertCartRemovedMessage(message: string) {
    cy.contains(this.cartRemovedMessage, message).should("be.visible");
  }
}
