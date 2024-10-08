# Playwright BDD Testing with TypeScript

Here is step-by-step guide on creating Playwright tests using Behavior-Driven Development (BDD) in TypeScript.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

### Step 1: Install Playwright

Run the following command to install Playwright:

```bash
npm install playwright
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

