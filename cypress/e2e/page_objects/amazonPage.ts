export default class AmazonPage {
  baseURL = Cypress.env().amazon.baseUrl;
  searchInput = "#twotabsearchtextbox";
  searchButton = "#nav-search-submit-button";
  searchResultCard = ".a-link-normal";
  quantitySelect = "#selectQuantity .a-button";
  quantityOption = ".a-dropdown-link";
  addToCartButton = "#add-to-cart-button";
  cartButton = ".a-button-text";
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
    cy.get(this.searchButton).click();
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
    cy.contains(this.cartButton, "Go to Cart").click({ force: true });
  }

  clickDeleteCartItemButton() {
    cy.get(this.deleteCartItemButton).click();
  }

  assertCartRemovedMessage(message: string) {
    cy.contains(this.cartRemovedMessage, message).should("be.visible");
  }
}
