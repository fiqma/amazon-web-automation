import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
      browserifyOptions: {
        plugin: [["tsify"]],
      },
    })
  );

  return config;
}

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "rd4f39",
  e2e: {
    setupNodeEvents,
    excludeSpecPattern: ["*.js", "*.md"],
    specPattern: "cypress/e2e/**/*.feature",
  },
});
