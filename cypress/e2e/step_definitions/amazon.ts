import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AmazonPage from "../page_objects/amazonPage";

const amazonPage = new AmazonPage();

Given("user is in Amazon page", () => {
  amazonPage.visitPage();
});

When("user types {string} on search box", (keyword: string) => {
  amazonPage.typeSearchInput(keyword);
});

When("user clicks on search button", () => {
  amazonPage.clickSearchButton();
});

When("user selects item {string}", (itemName: string) => {
  amazonPage.selectItem(itemName);
});

When("user selects quantity: {int}", (quantity: number) => {
  amazonPage.selectQuantity(quantity);
});

When("user clicks on Add to Cart button", () => {
  amazonPage.clickAddToCartButton();
});

When("user clicks on Cart button", () => {
  amazonPage.clickCartButton();
});

When("user clicks on delete cart item button", () => {
  amazonPage.clickDeleteCartItemButton();
});

Then("item removed successfully", () => {
  amazonPage.assertCartRemovedMessage("was removed from Shopping Cart.");
});
