    import { Locator, Page } from '@playwright/test';
    import { Header } from './header';
    import { Footer } from './footer'

    export class CartPage {
    readonly page: Page;
    readonly header: Header;
    readonly cartHeading: Locator;
    readonly allProductsInCart: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lasttName: Locator;
    readonly zipCode: Locator;
    readonly continueBtn: Locator;
    readonly finishBtn: Locator;
    readonly confirmationText: Locator;
    readonly checkoutSummary: Locator;
    readonly footer: Footer;
    


            constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.cartHeading = page.getByText('Your Cart');
    this.allProductsInCart = page.locator('div.cart_item');
    this.continueShoppingButton = page.getByRole('button', { name: 'Go back CONTINUE SHOPPING' });
    this.checkoutButton = page.getByRole('button', { name: 'CHECKOUT' });
    this.firstName = page.locator("//input[@placeholder='First Name']");
    this.lasttName = page.locator("//input[@placeholder='Last Name']");
    this.zipCode = page.locator("//input[@placeholder='Zip/Postal Code']");
    this.continueBtn = page.locator("//input[@value='Continue']");
    this.finishBtn = page.locator("//button[@data-test='finish']");
    this.confirmationText = page.locator("//h2[@data-test='complete-header']")
    this.checkoutSummary= page.locator("//div[@data-test='checkout-summary-container']")
    this.footer = new Footer(page);
    }

    async goto() : Promise<void> {
    await this.page.goto('/cart.html');
    }

    async doContinueShopping() : Promise<void> {
    await this.continueShoppingButton.click();
    }

    async doCheckout() : Promise<void> {
    await this.checkoutButton.click();
    }
    
    async inputFirstName(firstName: string) : Promise<void> {
        await this.firstName.fill(firstName)
    }

    async inputLastName(lastName: string) : Promise<void> {
        await this.lasttName.fill(lastName)
    }

    async inputZipCode(zipCode: string) : Promise<void> {
        await this.zipCode.fill(zipCode)
    }

    async continueCheckout() : Promise<void> {
        await this.continueBtn.click();
    }

    async finishCheckout() : Promise<void> {
        await this.finishBtn.click();
    }

    async checkoutConfirmation() : Promise<string> {    
        const text = await this.confirmationText.textContent();    
        return text!;
    }

    async checkoutSummaryContaints() : Promise<void> {
       await this.checkoutSummary.screenshot()
    }

    async removeProductFromCart(productName: string) : Promise<void> {
    const product: Locator = this.allProductsInCart.filter({ hasText: productName });

    const removeButton = product.locator('button');
    await removeButton.click();
    }

    async getProductPrice(productName: string) : Promise<string> {
    const product: Locator = this.allProductsInCart.filter({ hasText: productName });

    const price = await product.locator('div.inventory_item_price').textContent();

    return price!;
    }

    async getProductQuantity(productName: string) : Promise<number> {
    const product: Locator = this.allProductsInCart.filter({ hasText: productName });

    const quantity = await product.locator('div.cart_quantity').textContent();

    return +quantity!;
    }
    }
