import {LoginPage} from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
// import { test as baseTest } from "tests/base/base"
// import { test as baseTest } from "tests/fixtures/global-Setup"
import WebHelper from "@helper/webHelper";
import testData from "@testData/testData"


const test = baseTest.extend<{
    loginPage: LoginPage;
    WebHelper: WebHelper;
    testData: testData;


}>({
    WebHelper: async ({ page }, use) => {
        await use(new WebHelper(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },


})
export default test;
export const expect = test.expect;

