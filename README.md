# Playwright BDD Testing with TypeScript

Here is step-by-step guide on creating Playwright tests using Behavior-Driven Development (BDD) in TypeScript.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

### Step 1: Install Playwright

Run the following command to install dependencies:

```bash
npm install
```

## Creating a Page Object

### Step 2: Create a Page Object

If you need to work on a new page, create a page object. If you're working with an existing page, you can skip this step.

### Example: CartPage.ts

```typescript
import { Page, Locator } from 'playwright';
import { Header } from './Header';
import { Footer } from './Footer';

export class CartPage {
    readonly page: Page;
    readonly header: Header;
    readonly cartHeading: Locator;
    readonly allProductsInCart: Locator;
    readonly footer: Footer;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.cartHeading = page.getByText('Your Cart');
        this.allProductsInCart = page.locator('div.cart_item');
    }
}
```

## Implementing Locators

### Step 3: Implement Locators

Inside your page object, implement locators for elements you want to interact with.

## Error Handling

### Step 4: Create Methods with Error Handling

Implement methods in your page object, using try-catch blocks for error handling.

#### Example: doLogin Method

```typescript
/**
 * Login with the user name and password
 * @param userName User Name
 * @param password Password
 * We suggest not to store passwords in the code
 */
public async doLogin(userName: string, password: string) {
    try {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    } catch (error) {
        throw new Error(`Login functionality does not work properly | Error occurred: ${error}`);
    }
}
```

## Step Definitions

### Step 5: Create Step Definitions

If you're working with an existing step file, you can skip this step. Otherwise, define the steps for your test in a new step file.

#### Example: Login Steps

```typescript


When('the User tries to login with {string} as username and {string} as password', async ({ loginPage }, username: string, password: string) => {
    await loginPage.doLogin(username, password);
});

Then('copyright text in footer should be visible', async ({ productsPage }) => {
    await expect(productsPage.footer.copyrightText).toBeVisible();
});

Then('the copyright text contents should be correct', async ({ productsPage }) => {
    const textContent = await productsPage.footer.getCopyrightTextContent();
    expect(textContent).toEqual('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
});
```

## Writing Feature Files

### Step 6: Create Feature Files

Create feature files using Gherkin syntax to define your test scenarios.

#### Example: login.feature

```gherkin
@valid_creds 
Scenario Outline: Login should work with valid login credentials
  Given the User is on the login page
  When the User tries to login with "<username>" as username and "<password>" as password
  Then the User should be on the Products page

  Examples: 
    | username                | password     |
    | standard_user           | secret_sauce |
    | problem_user            | secret_sauce |
    | performance_glitch_user | secret_sauce |
```

## Executing Tests

### Step 7: Execute the Tests

Run your tests using the following command:

```bash
npm run test:admin
```

This command will execute the tests using the admin storage state. Check your `playwright.config.ts` file for all configuration settings.



## Storage State Setup Process

### Step 1: 
I have created an `authSetup` file.  
Inside this file, I have set up `admin`, `CLO`, `credit`, `loanAdmin`, and `RM` setup files. After the execution of the `admin` setup file, the admin storage state is stored in a JSON file.

### Step 2: 
In the `playwright.config.ts` file, I have created dependencies for `admin`, `CLO`, `credit`, `loanAdmin`, and `RM` and shared these dependencies inside the project.  
For example, when running `admin` test cases, the `admin` dependency (`admin.setup.ts`) should run first.

### Step 3: 
Go to the `package.json` file.  
Inside the scripts, I have added custom commands for `admin` and `loan` tag, so I can run tests with the command:  

```bash
npm run test:admin
```



### **Test Plan for Story Implementation with Smoke Testing**

#### **Objective:**
To ensure that the story is tested manually and through automation, including smoke tests, and that all related documentation and reports are provided.

---

### **1. Manual Testing and Documentation**
   - **Objective:** Validate the functionality of the user story manually, ensuring all scenarios meet the acceptance criteria.
   - **Steps:**
     1. Review the user story, including its requirements and acceptance criteria.
     2. Conduct **manual tests** for all scenarios:
        - Positive cases
        - Negative cases
        - Edge cases
     3. Identify and document any bugs or issues encountered during testing.
     4. Create the following documentation:
        - Test scenarios and detailed test cases
        - Steps for each test case execution
        - Results of each test case (pass/fail)
        - List of any issues or defects logged during testing
   - **Deliverables:**
     - Manual test case document
     - Issue/Defect log (if any)
     - Updated user story with testing results and validations

---

### **2. Automation Test Script Creation (Including Smoke Testing)**
   - **Objective:** Convert manual test scenarios into automated test scripts, including smoke tests to verify critical functionalities.
   - **Steps:**
     1. Review the manual test cases and identify the high-priority cases for **smoke testing**.
     2. Develop **automated test scripts** covering:
        - All scenarios from the manual test cases.
        - A **smoke test suite** focusing on the critical paths of the system (e.g., login, core functionalities).
     3. Ensure all test cases are automated, and that the smoke test suite is optimized for quick execution.
     4. Validate the correctness of the automation scripts by running them in a local environment.
   - **Deliverables:**
     - Automation test scripts
     - Smoke test suite
     - Logs and execution results for the initial test run

---

### **3. Automation Test Execution**
   - **Objective:** Execute the automated test scripts, including smoke tests, on the build when it’s ready for staging (STG) or production (PROD) deployment.
   - **Steps:**
     1. Trigger the **smoke test suite** immediately after the deployment to STG/PROD to validate the critical functionalities.
     2. Once the smoke tests pass, execute the **full automation test suite** to cover all scenarios.
     3. Monitor and log the results, checking for any failed test cases or discrepancies.
     4. Report any bugs or issues identified during execution.
   - **Deliverables:**
     - Test execution logs (for smoke and full test suites)
     - Defects/Issues log (if found)
     - Detailed results for STG/PROD testing

---

### **4. Reporting and Communication**
   - **Objective:** Provide detailed reports and summaries of the automation execution results.
   - **Steps:**
     1. Compile results from both the **smoke tests** and **full automation suite**.
     2. Generate a **test execution report**, including:
        - Number of test cases executed
        - Pass/Fail status for each test case
        - Defects or issues found (if any)
        - Screenshots or logs from failed test cases (if applicable)
     3. Share the report with stakeholders (QA lead, product owner, development team, etc.).
     4. Prepare a **summary report** highlighting:
        - Critical defects (if any)
        - Test coverage and execution stats
        - Results of smoke and full test suites
   - **Deliverables:**
     - Test execution report
     - Automation test summary
     - Defects/issues report (if any)

---

