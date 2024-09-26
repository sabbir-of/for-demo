import { Locator, Page } from '@playwright/test';
import { Button } from '../components/Button';
import { InputPassword } from '../components/InputPassword';
import { InputText } from '../components/InputText';
import { BasePage } from './basePage';
import ENV from '@utils/env';

export class LoginPage extends BasePage {
    readonly userName: InputText;
    readonly password: InputPassword;
    readonly loginButton: any;
    readonly errorMessage: any;
    public BASE_URL = ENV.BASE_URL;

    constructor(page: Page) {
        //We need the page, and a friendly name for the page to be used in reports
        super(page, 'Login');
        const noByRole = false;
        this.userName = new InputText(this.page, this.annotationHelper, `[data-test="username"]`, noByRole);
        this.password = new InputPassword(this.page, this.annotationHelper, `[data-test="password"]`, noByRole);
        this.loginButton = page.locator(`//input[@value='Login']`);
        this.errorMessage = page.locator('[data-test="error"]');

    }

    /**
     * Login with the user name and password
     * @param userName User Name
     * @param password Password
     * We suggest don't store passwords in the code
     */
    public async doLogin(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
        
    }

}

































































// import { expect, Page } from "@playwright/test";
// import { existsSync, readFileSync } from 'fs'
// export default class LoginPage {
//     // [x: string]: any;
//     private page: Page;
//     // static buffer: void;
//     constructor(page: Page) {
//         this.page = page;
//     }
//     private loginPageElements = {
//         configurationText: "//h5[text()='Configurations']",
//         triviaSestion: '//p[text()="Trivia"]',
//         plusbutton: "(//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')])[1]",
//         inputConfigrationsName: "//input[@type='string']",
//         logoutBtn: "//p[text()='Logout']",
//         loginBtn: "button[type='button']",
//         signInPageTitleText: "//p[text()='Sign in and start managing your Games!']",
//         usernameInputField: "input[type='text']",
//         passwordInputField: "input[type='password']",
//         loginButton: `button:has-text("Login")`,
//         invalidCredantialsAlertText: "text=Invalid credentials",
//         okBtn: "text=Ok",
//         usernameFieldRequirMassage: `//p[text()='"username" is not allowed to be empty']`,
//         loginPageLogo: "//h1/preceding::div[@class='MuiBox-root css-uycfjs']",
//         signinText: "//h1[text()='Sign in']",
//         idLabel: "//label[text()='Id']",
//         secretLabel: "//label[text()='Secret']",
//         eyeBtn: "//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]"



//     }

   
    

//     async login(username: string, password: string) {
//         const emailField = await this.page.locator(this.loginPageElements.usernameInputField)
//         const passwordField = await this.page.locator(this.loginPageElements.passwordInputField)
//         const ele = await this.page.locator(this.loginPageElements.loginButton)
//         try {
                        

//         } catch (error) {

//         }

//     }
   
    




// }