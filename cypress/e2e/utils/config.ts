type config = {
  amazon: {
    baseUrl: string;
  };
};

export default Cypress.config() as unknown as config;
