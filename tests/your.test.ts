import test, { expect } from "@fixtures/basePages";
import { LoginPage } from "@pages/Login.page";
import * as data from "@testData/data.json";
const clipboard = require("clipboardy");
import ENV from "@utils/env";




test('Login with valid user load inventory page', async ({ page, loginPage }) => {
 // Navigate to the login page
await loginPage.goTo();

// Log in using predefined username and password from the environment variables
await loginPage.loginWithUser(ENV.USERNAME, ENV.PASSWORD);

// Construct the expected URL for the inventory page after a successful login
const expectedPage = loginPage.BASE_URL + '/inventory.html';

// Assert that the current page URL matches the expected inventory page URL
loginPage.AssertEqual(
    expectedPage, // The expected URL
    page.url(),   // The current page URL
    'Check URL Page is equal to: "' + expectedPage + '"' // Error message for assertion failure
);

});


