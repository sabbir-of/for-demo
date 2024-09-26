<h1 text-align="center">Playwright-Project-Setup</h1>

## Introduction

Home Test - This project is based on Microsoft Playwright, which enables reliable end-to-end testing for modern web apps.


## Features

- Easy to Configure
- Auto wait for all elements & checks
- Generate HTML report
- Generate detailed trace file which helps to debug
- Generate snapshot for each step
- Record video for test case execution
- Support Web automation with support for chrome, Edge, Firefox and Safari
- Dynamic data handling using external JSON files
- Support taking screenshots
- Support Serial and Parallel execution
- Environment configuration using .env files
- Parallel execution
- Rerun only failed features
- Retry failed tests on CI
- Github Actions integrated with publish report to [github pages](https://sabbir-of.github.io/playwright-report/) 
- Page object model

## Tech Stack/Libraries Used

- [PlayWright](https://playwright.dev/) - for web automation
- [ESLint](https://eslint.org/) - pinpoint issues and guide you in rectifying potential problems in both JavaScript and TypeScript.
- [Prettier](https://prettier.io/) - for formatting code & maintain consistent style throughout codebase
- [Dotenv](https://www.dotenv.org/) - to load environment variables from .env file


## Getting Started

## Project Structure
**Project Structure**

/project-root
│
├── /fixtures
│   └── BDDFixture.ts            # Setup and teardown logic for BDD tests
│
├── /pages
│   └── yourPage.page.ts         # Page object extending BasePage with shared methods
│
├── /helpers
│   └── webhelper.ts             # Helper functions for various utilities in tests
│
├── /features
│   └── yourfeature.feature       # Gherkin feature file defining scenarios
│
├── /steps
│   └── yourTest.steps.ts        # Step definitions mapping to feature file steps
│
└── /utils
    └── additionalHelpers.ts      # Optional: Additional utility functions if needed


### Prerequisite

- `nodejs`: Download and install Node JS from
  > `https://nodejs.org/en/download`
- `Visual Studio Code/Aqua/IntelliJ`: Download and install code editor

### Installation

- - clone the repo using below URL
    
    > https://github.com/sabbir-of/home-test.git
    > 
- Run this on your local machine, git clone the repo to local. In the main directory run the below commands. This will install playwright dependencies on your machine.:
    
    > npm install
    > 
- For execution all the test cases:
    
    > npm run test
    > 
- To open last HTML report run::
    
    > npm run report
    > 
- Or If you want to run this in with github action then navigate to the actions tab open a build and click on the "Re-run all the jobs"
    > Then view the updated report to [github pages](https://sabbir-of.github.io/playwright-report/)
    >



### Usage

### Create a Page Object

1. **Create a Page:**
   - Inside the `pages` folder, create a new file named `yourPage.page.ts`.

2. **Extend BasePage:**
   - Ensure `yourPage.page.ts` extends a `BasePage` class that contains common methods or properties shared across different pages.

### Create a Steps File

1. **Create Steps File:**
   - Inside the `steps` folder, create a new file named `yourTest.steps.ts`.

2. **Define Steps for Tests:**
   - In `yourTest.steps.ts`, create step definitions that map to the steps in your feature files.

### Create a Feature File

1. **Create Feature File:**
   - Inside the `features` folder, create a new file named `yourfeature.feature`.

2. **Define Feature and Scenarios:**
   - Write your feature and scenarios using the Gherkin syntax. Example:


1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" "dev"`Test Cases are present in "tests" folder`:
    1. If you want to execute test in Staging then run this command
        - `npm run test:stg`
    2. If you want to execute test in Dev then run this command
        - `npm run test:dev`
    3. If you want to execute test in Prod then run this command
        - `npm run test:prod`


### Run Test With Custom Command

**Usage**

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" or "dev", `Test Cases are present in "tests" folder`:
- `npm run test:dev (name-of-file.spec.ts)`
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.chrome.ts` to run test in ui mode on chrome browser
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.firefox.ts` to run test in ui mode on firefox browser
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.edge.ts` to run test in ui mode on edge browser

