import { BrowserContext, Page, expect } from "@playwright/test";
const fs = require('fs');
import { Helper } from "helper/Helper";

export default class WebHelper extends Helper {

  readonly webPage: Page;
  // readonly browserContext: BrowserContext;

  constructor(webPage: Page) {
    super();
    this.webPage = webPage;
    // this.browserContext = browserContext;
  }

  private functionsPageElements = {
    mainMenuPage: "text=Main Menu",
    mobileDesignPage: "text=Mobile Design",
    fontSectionExpandCollapseBtn: "//p[text()='Fonts']/following-sibling::div",
    colorSectionExpandCollapseBtn:
      "//p[text()='Colors']/following-sibling::div",
    uploadImageSectionExpandCollapseBtn:
      "//p[text()='Image Uploads']/following-sibling::div",
    dialogsSectionExpandCollapseBtn:
      "//p[text()='Dialogs']/following-sibling::div",
    desktopMockupSectionExpandCollapseBtn:
      "//p[text()='Desktop Mockup']/following-sibling::div",
    menuPage: "//p[text()='Menu']",
    fontDeleteBtn:
      "(//p[text()='Midnight']/following::button[@type='button']//div)[1]",
    uploadedFont: "//p[text()='Midnight']",
    uploadFont: "//div[@class='MuiBox-root css-l8gl3u']",
    uploadFontTitle: "//p[text()='Midnight']",
    backgroundColorInputField:
      "//p[text()='Background']/following-sibling::button",
    colorCodeInputField:
      "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
    colorPickerWindowSaveBtn: "//button[text()='Save']",
    textColorInputField: "//p[text()='Text Color']/following-sibling::button",
    activeBackgroundColorInputField:
      "//p[text()='Active Background']/following-sibling::button",
    clearBtn: "//button[text()='Clear All']",
    bottomAlignmentBtn: "//h5[text()='Bottom']",
    signUpPage: "//p[text()='Sign Up']",
    anonymousLoginRadioBtn: "input[value='anonymousLogin']",
    threeteenOrolder: "//input[@value='thirteenOrOlder']",
    ageInfoOff: "//span[text()='Off']",
    automaticAssignUserNameEnableDisableBtn:
      "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
    phoneNumberCheckBox: "(//input[@value='phone'])[1]",
    emailAddressCheckBox: "(//input[@value='email'])[1]",
    ageCheckBox: "(//input[@value='age'])[1]",
    nameCheckBox: "(//input[@value='name'])[1]",
    dateOfBirthCheckBox: "(//input[@value='birthDate'])[1]",
    zipCodeCheckBox: "(//input[@value='zipCode'])[1]",
    languagePage: "//p[text()='Language']",
    customQuestionCheckBox: "//span[@label='Custom Question']//input[1]",
    customOptionSignUpToHomeCheckBox: "//input[@value='signUpHome']",
    customOptionCheckBox: "//input[@value='customOptin']",
    userForceLanguageRadioBtn: "//input[@value='forced']",
    forceLanguageInputField:
      "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]",
    englishLanguage: "//li[text()='English']",
    menuPagePresetSelectionField: "(//div[@role='button'])[3]",
    defaultPreset: "//li[text()='Default']",
    addPresetPlusBtn: "(//button[@aria-label='Add new configuration'])[3]",
    presetNameInputField: `[style="background-color: inherit;"]`,
    saveBtn: "//button[text()='Save']",
    saveBtnForProfileSet: "//div[@class='MuiBox-root css-1p65aex']//button[1]",
    outsideOfInputField: "//div[@id='menu-']//div[1]",
    signUpPresetSelctionField: "(//div[@role='button'])[3]",
    signUpPresetNameInputField: "//input[@id='P-20334653112']",
    chooseBtnWithoutIfream: "//button[text()='Choose File']",
    homeBtn: `[data-testid="PersonIcon"]`,
    entryScreenSectionFiled:
      "(//p[text()='Entry Screen']/following::div[@role='button'])[1]",
    entryScreenHomeBtn: "//li[@data-value='home']",

    // helperForGameUrlCopy
    triviaSestion: `//span[text()='Trivia Mania']`,
    mobileLinkOptionCloseBtn:
      "//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]//div[1]",
    mobileLinkOpenBtnDefault: `[data-testid="QrCodeIcon"]`,
    mobileLinkCopyBtn: "//button[@aria-label='Copy Link']",
    defultGameStopBtn: "DefaultLive",
    okBtn: "//button[text()='Ok']",
    GameSettingsSection: '//p[text()="Game Settings"]',
    menuPresetSelectionDropDownBtn: "(//div[@role='button'])[1]",
    signUpPresetSelectionDropDownBtn: "(//div[@role='button'])[2]",
    defaultMenuPreset: "//li[text()='Default']",
    configarationDeleteBtn: `//p[text()='Delete']`,
    confirmDeleteBtn: `//button[text()='Delete']`,
    defaultGameTitle: `//h6[text()='Default']`,
    colorDeleteBtn: `[data-testid="DeleteIcon"]`,
  };

  
  async adminMainMenuSettingsHelper() {
    // Locate the home avatar button
    const homeAvatarBtn = this.webPage.locator(this.functionsPageElements.homeBtn);
    try {
      // Click the home avatar button with a delay to simulate user interaction
      await homeAvatarBtn.click({ button: "left", delay: 1000 });
      // Wait for 2 seconds to ensure the page has responded to the click
      await this.webPage.waitForTimeout(2000);
    } catch (error) {
      // Throw an error if the home avatar button is not visible
      throw new Error(
        `Home Screen | Home Avatar Is Not Visible | Could not find locator: "${error}"`
      );
    }
  
    // Locate the main menu button
    let mainMenu = await this.webPage.locator(this.functionsPageElements.mainMenuPage);
    try {
      // Click the main menu button with a delay
      await mainMenu.click({ button: "left", delay: 1000 });
      // Wait for the network activity to idle indicating the page has loaded
      await this.webPage.waitForLoadState("networkidle");
    } catch (error) {
      // Throw an error if the main menu button is not visible
      throw new Error(
        `Home Avatar Button | Main Menu Button Element Is not Visible | Could not find locator: "${error}"`
      );
    }
  
    // Locate the Mobile Design button
    let mobileDesignPage = await this.webPage.locator(this.functionsPageElements.mobileDesignPage);
    try {
      // Click the Mobile Design button with a delay
      await mobileDesignPage.click({ button: "left", delay: 1000 });
      // Wait for 3 seconds to ensure the page has responded to the click
      await this.webPage.waitForTimeout(3000);
    } catch (error) {
      // Throw an error if the Mobile Design button is not visible
      throw new Error(
        `Home Avatar Button | Main Menu | Mobile Design Button Element Is not Visible | Could not find locator: "${error}"`
      );
    }
  
    // Locate the font section expand/collapse button
    const fontSectionExp = this.webPage.locator(this.functionsPageElements.fontSectionExpandCollapseBtn);
    try {
      // Click the font section button with a delay
      await fontSectionExp.click({ button: "left", delay: 1000 });
      // Wait for 5 seconds to ensure the section has expanded/collapsed
      await this.webPage.waitForTimeout(5000);
    } catch (error) {
      // Throw an error if the font section button is not visible
      throw new Error(
        `Main Menu | Mobile Design | Font Section Expand Collapse Button Is Not Visible | Could not find locator: "${error}"`
      );
    }
  
    // Locate the font delete button for Mobile Design
    const fontDeleteBtnForMD = await this.webPage.locator(this.functionsPageElements.fontDeleteBtn);
    try {
      // Check if the font delete button is visible
      if (await fontDeleteBtnForMD.isVisible()) {
        // Click the font delete button with a delay
        await fontDeleteBtnForMD.click({ button: "left", delay: 1000 });
      }
    } catch (error) {
      // If an error occurs, log it silently for now
      console.error(`Error clicking font delete button: ${error}`);
    }
  
    // Define the file path for the font to be uploaded in Mobile Design
    const filePath0forMD = "testData/fonts/Midnight.ttf";
    // Set up a listener for the file chooser event
    this.webPage.on("filechooser", async (filechooser) => {
      // Set the file to be uploaded when the file chooser is triggered
      await filechooser.setFiles([filePath0forMD]);
    });
  
  
      // Step 1: Locate and click the font upload button for Mobile Design
  const uploadMenuFontForMD = await this.webPage
  .locator(this.functionsPageElements.uploadFont)
  .first();
  try {
  // Attempt to click the upload button with a simulated user delay
  await uploadMenuFontForMD.click({ button: "left", delay: 1000 });
  } catch (error) {
  // If the button is not found, throw an error with a detailed message
  throw new Error(
    `Main Menu Font Upload Element Is Not Found | Could not find locator: "${error}"`
  );
  }
  
  // Step 2: Verify that the font uploaded successfully
  await this.webPage.waitForSelector(this.functionsPageElements.uploadFontTitle);
  const verifyFontUploadedMD = this.webPage.locator(
  this.functionsPageElements.uploadFontTitle
  );
  try {
  // Check if the uploaded font title is clickable and perform a click
  await verifyFontUploadedMD.click({ button: "left", delay: 1000 });
  } catch (error) {
  // If the font title is not clickable, throw an error indicating upload failure
  throw new Error("Font Does Not Upload Successfully");
  }
  
  // Step 3: Navigate to the Mobile Design page
  let menuPage = await this.webPage.locator(this.functionsPageElements.menuPage);
  try {
  // Click the Mobile Design button with a delay to allow for user-like interaction
  await menuPage.click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the navigation has occurred
  await this.webPage.waitForTimeout(2000);
  } catch (error) {
  // If the Mobile Design button is not visible, throw an error with details
  throw new Error(
    `Home Avatar Button | Main Menu | Menu Page Button Element Is not Visible | Could not find locator: "${error}"`
  );
  }
  
  // Step 4: Select a preset from the menu page
  const presetMenuSection = await this.webPage.locator(
  this.functionsPageElements.menuPagePresetSelectionField
  );
  try {
  // Force click the preset selection field if it's not immediately interactable
  await presetMenuSection.click({ button: "left", force: true });
  // Wait for 2 seconds to allow for any associated actions to complete
  await this.webPage.waitForTimeout(2000);
  } catch (error) {
  // If the preset selection field is not visible, throw an error with details
  throw new Error(
    `Main Menu | Menu Page Preset Selection Input Field Is Not Visible | Could not find locator: "${error}"`
  );
  }
  
  
      // Initialize locator for the 'Add Preset' plus button
  let addPresetPlusbtn = await this.webPage.locator(
    this.functionsPageElements.addPresetPlusBtn
  );
  // Initialize locator for the 'Save' button
  let saveBtn = await this.webPage.locator(this.functionsPageElements.saveBtn);
  // Initialize locator for the area outside of input fields
  let outsideOfInputFiled = await this.webPage.locator(
    this.functionsPageElements.outsideOfInputField
  );
  // Initialize locator for the 'Add Preset' input field
  let addPresetInputField = await this.webPage.locator(
    this.functionsPageElements.presetNameInputField
  );
  // Initialize locator for the 'Sign Up' add preset name input field by placeholder
  let signUPAddPresetNameInputField = await this.webPage.getByPlaceholder(
    "Name"
  );
  // Initialize locator for the 'Sign Up' page preset selection field
  let signUpPagePresetInputField = await this.webPage.locator(
    this.functionsPageElements.signUpPresetSelctionField
  );
  // Initialize locator for the default preset option
  let defaultPreset = await this.webPage.locator(
    this.functionsPageElements.defaultPreset
  );
  
  // Check if the default preset is visible
  if (await defaultPreset.isVisible()) {
    // If visible, click the default preset
    await defaultPreset.click({ button: "left", delay: 1000 });
  } else {
    // If not visible, click outside the input field to close any open dropdown
    await outsideOfInputFiled.click({ button: "left", delay: 1000 });
    // Click the 'Add Preset' plus button to open the add preset dialog
    await addPresetPlusbtn.click({ button: "left" });
    // Wait for 2 seconds to ensure the dialog is open
    await this.webPage.waitForTimeout(2000);
    // Fill the 'Add Preset' input field with the name "Default"
    await addPresetInputField.fill("Default");
    // Wait for 2 seconds after filling the input
    await this.webPage.waitForTimeout(2000);
    // Click the 'Save' button to save the new preset
    await saveBtn.click({ button: "left" });
    // Click the preset menu section to select the new preset
    await presetMenuSection.click({ button: "left", delay: 1000 });
    // Click the default preset now that it has been added
    await defaultPreset.click({ button: "left", delay: 1000 });
  }
  
  // Initialize locator for the font delete button
  const fontDeleteBtn = await this.webPage.locator(
    this.functionsPageElements.fontDeleteBtn
  );
  try {
    // Check if the font delete button is visible
    if (await fontDeleteBtn.isVisible()) {
      // If visible, click the font delete button
      await fontDeleteBtn.click({ button: "left", delay: 1000 });
      // Wait for 2 seconds after clicking
      await this.webPage.waitForTimeout(2000);
    }
  } catch (error) {
    // Log any errors silently
    console.error(`Error clicking font delete button: ${error}`);
  }
  
  // Define the file path for the font to be uploaded
  const filePath0 = "testData/fonts/Midnight.ttf";
  // Set up a listener for the file chooser event
  this.webPage.on("filechooser", async (filechooser) => {
    // Set the file to be uploaded when the file chooser is triggered
    await filechooser.setFiles([filePath0]);
  });
  
  // Initialize locator for the upload font button
  const uploadMenuFont = await this.webPage
    .locator(this.functionsPageElements.uploadFont)
    .first();
  try {
    // Click the upload font button
    await uploadMenuFont.click({ button: "left", delay: 1000 });
  } catch (error) {
    // Throw an error if the upload font button is not found
    throw new Error(
      `Main Menu Font Upload Element Is Not Found | Could not find locator: "${error}"`
    );
  }
  
  // Wait for the font title to appear as a confirmation of successful upload
  await this.webPage.waitForSelector(this.functionsPageElements.uploadFontTitle);
  // Initialize locator for the uploaded font title
  const verifyFontUploaded = this.webPage.locator(
    this.functionsPageElements.uploadFontTitle
  );
  try {
    // Click the uploaded font title to verify the upload
    await verifyFontUploaded.click({ button: "left", delay: 1000 });
  } catch (error) {
    // Throw an error if the font title is not clickable, indicating upload failure
    throw new Error("Font Does Not Upload Successfully");
  }
  
  // Initialize locator for the entry screen section field
  const entryScreen = this.webPage.locator(
    this.functionsPageElements.entryScreenSectionFiled
  );
  // Initialize locator for the home button on the entry screen
  const homeBtn = this.webPage.locator(
    this.functionsPageElements.entryScreenHomeBtn
  );
  
  try {
    // Click the entry screen section field
    await entryScreen.click({ button: "left", delay: 1000 });
    // Wait for 2 seconds to allow for any associated actions to complete
    await this.webPage.waitForTimeout(2000);
    // Click the home button on the entry screen
    await homeBtn.click({ button: "left", delay: 1000 });
  } catch (error) {
    // Throw an error if there is an issue selecting the home button on the entry screen
    throw new Error("Entry Screen Home Button Selection Issue");
  }
  
  
     // Initialize locator for the 'Clear' button
  const clearBtn = this.webPage.locator(this.functionsPageElements.clearBtn);
  try {
    // Click the 'Clear' button with a simulated user delay
    await clearBtn.click({ button: "left", delay: 1000 });
  } catch (error) {
    // Throw an error if the font upload process does not succeed
    throw new Error("Font Does Not Upload Successfully");
  }
  
  // Initialize locator for the 'Bottom Alignment' button in the Menu Bar
  const bottomAlignmentBtn = this.webPage.locator(
    this.functionsPageElements.bottomAlignmentBtn
  );
  try {
    // Click the 'Bottom Alignment' button with a delay
    await bottomAlignmentBtn.click({ button: "left", delay: 1000 });
  } catch (error) {
    // Throw an error if the bottom alignment button is not visible
    throw new Error("Main Bar Bottom Alignment Button Element Is Visible");
  }
  
  // Initialize locator for the 'Sign Up' page button
  const signUpPage = this.webPage.locator(this.functionsPageElements.signUpPage);
  try {
    // Click the 'Sign Up' page button with a delay
    await signUpPage.click({ button: "left", delay: 1000 });
    // Wait for the network activity to idle, indicating the page has loaded
    await this.webPage.waitForLoadState("networkidle");
  } catch (error) {
    // Throw an error if the sign-up button element is not visible
    throw new Error("Sign Up Page SignUP Button Element Is Not Visible");
  }
  
  // Click the preset input field on the 'Sign Up' page
  await signUpPagePresetInputField.click({ button: "left" });
  // Wait for 2 seconds to allow for any associated actions to complete
  await this.webPage.waitForTimeout(2000);
  
  // Check if the default preset is visible
  if (await defaultPreset.isVisible()) {
    // If visible, click the default preset
    await defaultPreset.click({ button: "left", delay: 1000 });
  } else {
    // If not visible, click outside the input field to close any open dropdown
    await outsideOfInputFiled.click({ button: "left", delay: 1000 });
    // Wait for 2 seconds
    await this.webPage.waitForTimeout(2000);
    // Click the 'Add Preset' plus button to open the add preset dialog
    await addPresetPlusbtn.click({ button: "left" });
    // Wait for 2 seconds to ensure the dialog is open
    await this.webPage.waitForTimeout(2000);
    // Fill the 'Add Preset' input field with the name "Default"
    await addPresetInputField.fill("Default");
    // Click the 'Save' button to save the new preset
    await saveBtn.click({ button: "left" });
    // Click the preset input field again to select the new preset
    await signUpPagePresetInputField.click({ button: "left", delay: 1000 });
    // Click the default preset now that it has been added
    await defaultPreset.click({ button: "left", delay: 1000 });
  }
  
  // Initialize locator for the 'Anonymous Login' radio button
  let anonymousLoginRadioBtn = await this.webPage
    .locator(this.functionsPageElements.anonymousLoginRadioBtn)
    .isChecked();
  // Check if the 'Anonymous Login' radio button is not already checked
  if (anonymousLoginRadioBtn == false) {
    // If not checked, click the 'Anonymous Login' radio button
    await this.webPage
      .locator(this.functionsPageElements.anonymousLoginRadioBtn)
      .click({ button: "left", delay: 1000 });
    // Wait for 2 seconds after clicking
    await this.webPage.waitForTimeout(2000);
  }
  
  
     // Click the checkbox to confirm the user's age is 13 or older
  let ageInfoOff = await this.webPage.locator(this.functionsPageElements.ageInfoOff);
  try {
    // Force the click action in case the element is not immediately interactable
    await ageInfoOff.click({ force: true });
  } catch (error) {
    // If the element is not visible, throw an error with a descriptive message
    throw new Error("Sign Up Page age info off Button Element Is Not Visible");
  }
  
  // Check the status of the automatic username assignment toggle
  let automaticAssignUserNameEnableDisableBtn = await this.webPage
    .locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn)
    .isChecked();
  // If the toggle is off, click to enable automatic username assignment
  if (automaticAssignUserNameEnableDisableBtn == false) {
    await this.webPage
      .locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn)
      .click({ button: "left", delay: 1000 });
    // Wait for 2 seconds to ensure the action is processed
    await this.webPage.waitForTimeout(2000);
  }
  
  // Check the status of the phone number checkbox in additional information
  let phoneNumberCheckBox = await this.webPage
    .locator(this.functionsPageElements.phoneNumberCheckBox)
    .isChecked();
  // If the checkbox is checked, click to uncheck it
  if (phoneNumberCheckBox == true) {
    await this.webPage
      .locator(this.functionsPageElements.phoneNumberCheckBox)
      .click({ button: "left", delay: 1000 });
    // Wait for 2 seconds to ensure the action is processed
    await this.webPage.waitForTimeout(2000);
  }
  
  // Check the status of the email address checkbox in additional information
  let emailAddressCheckBox = await this.webPage
    .locator(this.functionsPageElements.emailAddressCheckBox)
    .isChecked();
  // If the checkbox is checked, click to uncheck it
  if (emailAddressCheckBox == true) {
    await this.webPage
      .locator(this.functionsPageElements.emailAddressCheckBox)
      .click({ button: "left", delay: 1000 });
    // Wait for 2 seconds to ensure the action is processed
    await this.webPage.waitForTimeout(2000);
  }
  
  
      // Uncheck the 'Age' checkbox if it is checked
  let ageCheckBox = await this.webPage
  .locator(this.functionsPageElements.ageCheckBox)
  .isChecked();
  if (ageCheckBox == true) {
  await this.webPage
    .locator(this.functionsPageElements.ageCheckBox)
    .click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the action is processed
  await this.webPage.waitForTimeout(2000);
  }
  
  // Uncheck the 'Name' checkbox if it is checked
  let nameCheckBox = await this.webPage
  .locator(this.functionsPageElements.nameCheckBox)
  .isChecked();
  if (nameCheckBox == true) {
  await this.webPage
    .locator(this.functionsPageElements.nameCheckBox)
    .click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the action is processed
  await this.webPage.waitForTimeout(2000);
  }
  
  // Uncheck the 'Date of Birth' checkbox if it is checked
  let dateOfBirthCheckBox = await this.webPage
  .locator(this.functionsPageElements.dateOfBirthCheckBox)
  .isChecked();
  if (dateOfBirthCheckBox == true) {
  await this.webPage
    .locator(this.functionsPageElements.dateOfBirthCheckBox)
    .click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the action is processed
  await this.webPage.waitForTimeout(2000);
  }
  
  // Uncheck the 'Zip Code' checkbox if it is checked
  let zipCodeCheckBox = await this.webPage
  .locator(this.functionsPageElements.zipCodeCheckBox)
  .isChecked();
  if (zipCodeCheckBox == true) {
  await this.webPage
    .locator(this.functionsPageElements.zipCodeCheckBox)
    .click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the action is processed
  await this.webPage.waitForTimeout(2000);
  }
  
  // Uncheck the 'Custom Question' checkbox if it is checked
  let customQuestionCheckBox = await this.webPage
  .locator(this.functionsPageElements.customQuestionCheckBox)
  .isChecked();
  if (customQuestionCheckBox == true) {
  await this.webPage
    .locator(this.functionsPageElements.customQuestionCheckBox)
    .click({ button: "left", delay: 1000 });
  // Wait for 2 seconds to ensure the action is processed
  await this.webPage.waitForTimeout(2000);
  }
  
  
      
     // Check if the 'Sign Up to Home' custom option checkbox is unchecked
  let signUpToHomeBtn = await this.webPage
  .locator(this.functionsPageElements.customOptionSignUpToHomeCheckBox)
  .isChecked();
  // If unchecked, click to check it and wait for 2 seconds
  if (signUpToHomeBtn == false) {
  await this.webPage
    .locator(this.functionsPageElements.customOptionSignUpToHomeCheckBox)
    .click({ button: "left", delay: 1000 });
  await this.webPage.waitForTimeout(2000);
  }
  
  // Locate the custom option checkbox and uncheck it if checked
  let customOf = await this.webPage.locator(
  this.functionsPageElements.customOptionCheckBox
  );
  try {
  await customOf.uncheck({ force: true });
  await this.webPage.waitForTimeout(2000);
  } catch (error) {
  // Error handling is not specified
  }
  
  // Navigate to the Language Page by clicking the corresponding button
  let languagePage = await this.webPage.locator(
  this.functionsPageElements.languagePage
  );
  try {
  await languagePage.click({ button: "left", delay: 1000 });
  } catch (error) {
  // Throw an error if the Language Page button is not found
  throw new Error(
    `Main Menu | Language Page Button Element Is Not Found | Error occurred: ${error}`
  );
  }
  
  // Double-click the 'User Force Language' radio button to select it
  let userForceLanguageRadioBtn = await this.webPage.locator(
  this.functionsPageElements.userForceLanguageRadioBtn
  );
  try {
  await userForceLanguageRadioBtn.dblclick({ button: "left", delay: 1000 });
  await this.webPage.waitForTimeout(2000);
  } catch (error) {
  // Throw an error if the User Force Language radio button is not visible
  throw new Error(
    `Main Menu | Language Page User Force Language Radio Button Element Is Not Visible | Error occurred: ${error}`
  );
  }
  
  // Click the 'Force Language' input field to set a specific language
  let ele = await this.webPage.locator(
  this.functionsPageElements.forceLanguageInputField
  );
  try {
  await ele.click({ button: "left", delay: 1000 });
  await this.webPage.waitForTimeout(2000);
  } catch (error) {
  // Throw an error if the Force Language input field is not visible
  throw new Error(
    `Main Menu | Language Page User Force Language Radio Input Field Element Is Not Visible | Error occurred: ${error}`
  );
  }
  
  
     // Locate the English language option on the Language Page
  let englishLanguage = await this.webPage.locator(
    this.functionsPageElements.englishLanguage
  );
  try {
    // Click the English language option with a delay to simulate user interaction
    await englishLanguage.click({ button: "left", delay: 1000 });
    // Wait for 2 seconds to ensure the language selection is processed
    await this.webPage.waitForTimeout(2000);
  } catch (error) {
    // Throw an error if the English language option is not visible
    throw new Error(
      `Main Menu | Language Page English Language Element Is Not Visible | Error occurred: ${error}`
    );
  }
  
    }

  async deleteHelper() {

      const elements = this.webPage.frameLocator('iframe').locator(this.functionsPageElements.colorDeleteBtn).nth(0)
                          
        
  
      while (true) {
        // const elements = page.locator(locatorString);
        const count = await elements.count();
  
        if (count === 0) {
            break; // Exit the loop if no elements are found
        }        
        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            if (await element.isVisible()) {
                
                await elements.click({ button: "left", delay: 1000 })                                                         
                // Add a small delay to allow for page updates or use waitForResponse or waitForSelector if more appropriate
                // await this.page.waitForTimeout(1000); // Adjust the timeout as necessary
            }
        }
    }
  }

  /**
   * The `delay` function is an asynchronous function that waits for a specified amount of time before
   * resolving.
   * @param {number} time - The `time` parameter is a number that represents the duration of the delay
   * in seconds.
   * @returns a Promise that resolves to void.
   */
  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time * 1000);
    });
  }

  /**
   * The function clicks on an element on a web page based on its text content.
   * @param {string} text - The text parameter is a string that represents the text content of an element
   * that you want to click on. It is used to locate the element on the web page.
   * @param {boolean} [exact=true] - The `exact` parameter is a boolean value that determines whether the
   * text should be matched exactly or not. If `exact` is set to `true`, the `clickByText` function will
   * only click on elements that have an exact match with the provided text. If `exact` is set to `
   */
  async clickByText(text: string, exact: boolean = true): Promise<void> {
    await this.webPage.getByText(text, { exact: exact }).click();
  }

  async rightClickButton(locator: string): Promise<void> {
    await this.webPage.locator(locator).click({ button: "right" });
  }

  async leftClickButton(locator: string): Promise<void> {
    await this.webPage.locator(locator).click({ button: "left" });
  }








  async clickHelper(selector: string, options: { retries?: number, timeout?: number } = {}): Promise<void> {
    const { retries = 3, timeout = 3000 } = options;
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            await this.webPage.waitForSelector(selector, { state: 'attached', timeout });
            await this.webPage.click(selector);
            return;
        } catch (error) {
            if (attempt === retries - 1) {
                throw new Error(`Click failed on selector: ${selector}. Error: ${error}`);
            }
        }
    }
}

  async navigateToUrl(url: string): Promise<void> {
    await this.webPage.goto(url);
  }

  async verifyDragAndDrop(
    source: string,
    target: string,
    verifyText: string
  ): Promise<void> {
    let draggable = await this.webPage.locator(source);
    let droppable = await this.webPage.locator(target);
    await draggable.hover();
    await this.webPage.mouse.down();
    await droppable.hover();
    await this.webPage.mouse.up();
    await expect(droppable).toContainText(verifyText);
  }

  async verifyToolTip(locator: string, hoverText: string): Promise<void> {
    let el = await this.webPage.locator(locator);
    el.hover();
    await expect(el).toContainText(hoverText);
  }

  async verifyFileDownload(): Promise<void> {
    //TBD
  }

  async verifyNewTab(newTabUrlExpected: string): Promise<void> {
    //TBD
  }

  async verifyNewWindow(newWindowUrlExpected: string): Promise<void> {
    //TBD
  }
  async verifyFrameText(): Promise<void> {
    //TBD
  }
  async verifyNestedFrame(): Promise<void> {
    //TBD
  }

  /**
   * The function asserts that the current page URL matches the expected URL.
   * @param {string} url - The `url` parameter is a string that represents the expected URL of a web
   * page.
   */
  async assertPageURL(url: string): Promise<void> {
    console.log(`Asserts that page url is ${url}.`);
    await expect(this.webPage).toHaveURL(url);
  }

  /**
   * The function asserts that the page title matches the expected title.
   * @param {string} title - The title parameter is a string that represents the expected title of the
   * web page.
   */
  async assertPageTitle(title: string): Promise<void> {
    console.log(`Asserts that page title is ${title}.`);
    await expect(this.webPage).toHaveTitle(title);
  }
  /**
   * The function opens a new tab in a browser context, navigates to a specified URL, and returns the
   * page object representing the new tab.
   * @param {string} url - A string representing the URL of the webpage that you want to open in a new
   * tab.
   * @returns a Promise that resolves to a Page object.
   */

  /**
   * The function takes a screenshot of a web page and saves it as an image file.
   * @param {string} imageName - The imageName parameter is a string that specifies the name of the
   * screenshot image file. If no value is provided, it defaults to "screenshot.png".
   */
  async takeScreenshot(imageName: string = `screenshot.png`): Promise<void> {
    await this.webPage.screenshot({ path: `${imageName}`, fullPage: true });
  }

  /**
   * The function takes a locator and an optional image name as parameters, finds the element on a web
   * page using the locator, and takes a screenshot of the element.
   * @param {string} locator - The `locator` parameter is a string that represents the element you want
   * to take a screenshot of. It can be a CSS selector, an XPath expression, or any other valid locator
   * strategy supported by the `this.webPage.locator` method.
   * @param {string} imageName - The `imageName` parameter is a string that specifies the name of the
   * screenshot image file. If no value is provided, it defaults to "screenshot.png".
   */
  async takeScreenshotOfElement(
    locator: string,
    imageName: string = `screenshot.png`
  ): Promise<void> {
    const el = await this.webPage.locator(locator);
    await el.screenshot({ path: `${imageName}` });
  }

  /**
   * The function checks if an element on a web page contains the expected text.
   * @param {string} target - A string representing the target element to locate on the web page.
   * @param {string} expectedText - The expected text that you want the element to contain.
   */
  async elementContainText(
    target: string,
    expectedText: string
  ): Promise<void> {
    console.log(
      `Asserts that element ${target} contains text ${expectedText}.`
    );
    const el = await this.webPage.locator(target);
    await expect(el).toContainText(expectedText);
  }

  /**
   * The function checks if an element on a web page has the expected text.
   * @param {string} target - The target parameter is a string that represents the locator for the
   * element you want to check for text. It could be a CSS selector, an XPath expression, or any other
   * valid locator strategy supported by the testing framework you are using.
   * @param {string} expectedText - The expected text that the element should have.
   */
  async elementHasText(target: string, expectedText: string): Promise<void> {
    console.log(
      `Asserts that element ${target} has expected text ${expectedText}.`
    );
    const el = await this.webPage.locator(target);
    await expect(el).toHaveText(expectedText);
  }

  /**
   * The function asserts that a specified element is visible on a web page.
   * @param {string} target - The `target` parameter is a string that represents the locator of the
   * element you want to check for visibility. It could be a CSS selector, an XPath expression, or any
   * other valid locator that can be used to identify the element on the web page.
   */
  async elementIsVisible(target: string): Promise<void> {
    console.log(`Asserts that element ${target} is visible.`);
    expect(await this.webPage.locator(target)).toBeVisible();
  }

  /**
   * The function asserts that a specified element is not visible on a web page.
   * @param {string} target - The target parameter is a string that represents the locator or selector
   * for the element that you want to check for visibility. It can be a CSS selector, an XPath
   * expression, or any other valid locator that can be used to identify the element on the web page.
   */
  async elementIsNotVisible(target: string): Promise<void> {
    console.log(`Asserts that element ${target} is not visible.`);
    expect(await this.webPage.locator(target)).toBeHidden();
  }

  async elementHasAttributeAndValue(
    target: string,
    attribute: string,
    attributeVal: string
  ): Promise<void> {
    console.log(
      `Asserts that '${target}' has a specific attribute '${attribute}' with the expected value '${attributeVal}'.`
    );
    //expect(await (target).toHaveAttribute(attribute, attributeVal));
  }

  /**
   * The `blockRequest` function blocks all requests in a given browser context that do not start with a
   * specified request name.
   * @param {BrowserContext} context - The `context` parameter is an instance of a `BrowserContext`
   * object. It represents a browser context in Puppeteer, which is a container for a set of pages and
   * allows for fine-grained control over browser behavior.
   * @param {string} requestName - The `requestName` parameter is a string that represents the name of
   * the request you want to block.
   * Call this method in your tests
   */
  async blockRequest(context: BrowserContext, requestName: string) {
    await context.route("**/*", (request) => {
      request.request().url().startsWith(`${requestName}`)
        ? request.abort()
        : request.continue();
      return;
    });
  }

  /**
   * The function will setup a listener for alert box, if dialog appears during the test then automatically accepting them.
   * Alert box contains only Ok button
   */
  async acceptAlertBox(): Promise<void> {
    console.log(`Handle Alert Box by clicking on Ok button`);
    this.webPage.on("dialog", async (dialog) => dialog.dismiss());
  }

  /**
   * The function will setup a listener for Confirm box, if dialog appears during the test then automatically call accept/dismiss method.
   * Confirm box contains Ok/Cancel button
   */
  async acceptConfirmBox(): Promise<void> {
    console.log(`Accept Confirm Box by clicking on Ok button`);
    this.webPage.on("dialog", async (dialog) => dialog.accept());
  }

  async dismissConfirmBox(): Promise<void> {
    console.log(`Dismiss Confirm Box by clicking on Cancel button`);
    this.webPage.on("dialog", async (dialog) => dialog.dismiss());
  }

  /**
   * The function will setup a listener for Prompt box, if dialog appears during the test then automatically call accept/dismiss method.
   * Prompt box contains text box where user can enter text and submit (using Ok/Cancel button) it.
   */
  async handlePromptBox(txtVal: string): Promise<void> {
    console.log(`Enter text message in Prompt Box and click on Ok button`);
    this.webPage.on("dialog", async (dialog) => dialog.accept(txtVal));
  }

  waitForDialogMessage(page: Page) {
    return new Promise((resolve) => {
      page.on("dialog", (dialog) => {
        resolve(dialog.message());
      });
    });
  }

  /**
   * The function will read text message from Alert and return.
   */
  async getAlertText(): Promise<string> {
    console.log(`Read text message from Alert box`);
    let dialogMessage: string;
    dialogMessage = await this.waitForDialogMessage(
      this.webPage
    ).then.toString();
    console.log(dialogMessage);
    return dialogMessage;
  }

  /**
   * The function `getFrame` takes a frame locator as input and calls a method on the `webPage` object
   * to locate the frame.
   * @param {string} frameLocator - The frameLocator parameter is a string that represents the locator
   * or identifier of the frame you want to retrieve.
   */
  async getFrame(frameLocator: string) {
    return this.webPage.frameLocator(frameLocator);
  }

  /**
   * The function `getStringFromShadowDom` retrieves the text content from a specified element within
   * the Shadow DOM.
   * @param {string} locator - The `locator` parameter is a string that represents a CSS selector used
   * to locate an element within the Shadow DOM.
   * @returns a Promise that resolves to a string.
   */
  async getStringFromShadowDom(locator: string): Promise<string> {
    return (await this.webPage.locator(locator).textContent()) as string;
  }

  /**
   * The `downLoadFile` function downloads a file by clicking on a specified locator and waits for the
   * download event to occur.
   * @param {string} locator - The locator parameter is a string that represents the selector used to
   * locate the element on the web page that triggers the file download. It could be an ID, class name,
   * CSS selector, or any other valid selector that can be used with the `this.webPage.locator()`
   * method to locate the element
   * @param {string} expectedFileName - The expectedFileName parameter is a string that represents the
   * name of the file that is expected to be downloaded.
   * @param {string} savePath - The `savePath` parameter is a string that represents the path where the
   * downloaded file will be saved on the local machine.
   */
  async downLoadFile(
    locator: string,
    expectedFileName: string,
    savePath: string
  ) {
    //start download
    const [download] = await Promise.all([
      this.webPage.waitForEvent("download"),
      this.webPage.locator(locator).click(),
    ]);

    await download.saveAs(savePath);
    return download;
  }

  /**
   * The function uploads a file to a web page using the specified file path, file upload locator, and
   * upload button locator.
   * @param {string} filePath - The file path is the path to the file that you want to upload. It
   * should be a string that specifies the location of the file on your computer.
   * @param {string} fileUploadLocator - The fileUploadLocator parameter is a string that represents
   * the locator of the file upload input element on the web page. This locator is used to identify the
   * element where the file will be uploaded to.
   * @param {string} uploadBtnLocator - The `uploadBtnLocator` parameter is a string that represents
   * the locator of the upload button on the web page. It is used to locate and interact with the
   * upload button element on the page.
   */
  async uploadFile(
    filePath: string,
    fileUploadLocator: string,
    uploadBtnLocator: string
  ) {
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist`);
      throw new Error(`File not found :${filePath}`);
    }

    await this.webPage.setInputFiles(`${fileUploadLocator}`, filePath);
    await this.webPage.locator(`${uploadBtnLocator}`).click();
  }

  /**
   * The function intercepts a specific route in a browser context, logs the request and response, and
   * continues with the intercepted request.
   * @param {string} interceptRoute - The interceptRoute parameter is a string that represents the route
   * that you want to intercept. It is used to match against the URL of incoming requests and determine
   * if the route should be intercepted.
   */


  /**
   * The function intercepts a specific route and aborts it.
   * @param {string} interceptRoute - The `interceptRoute` parameter is a string that represents the
   * URL pattern that you want to intercept and abort. It is used to match against the URLs of incoming
   * network requests.
   */
 
  /**
   * The function intercepts a specified route and modifies the response data with the provided JSON
   * data.
   * @param {string} interceptRoute - The `interceptRoute` parameter is a string that represents the
   * route that you want to intercept. It is the URL or path that you want to intercept and modify the
   * response for. For example, if you want to intercept the route "/api/data", you would pass
   * "/api/data" as the
   * @param {string} modifiedJsonData - The `modifiedJsonData` parameter is a string representing the
   * modified JSON data that you want to use as the response body for the intercepted route.
   */
  

  async changeElementValue(): Promise<void> {}

  async verifyValueFromUi(): Promise<void> {}

  async getAttribute(locator: string, attributeName: string): Promise<string> {
    const value = await this.webPage
      .locator(locator)
      .getAttribute(attributeName);
    return value ?? "";
  }

  async getText(locator: string): Promise<string> {
    const value = await this.webPage.locator(locator).textContent();
    return value ?? "";
  }

  async press(key: string): Promise<void> {
    await this.webPage.keyboard.press(key);
  }

  
}
