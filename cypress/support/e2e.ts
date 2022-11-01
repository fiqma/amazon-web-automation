Cypress.on("uncaught:exception", (err) => {
  console.warn(err);
  if (err.message && err.message.includes("Unexpected token")) {
    return false;
  }
  return true;
});
