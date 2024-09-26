import { Locator, Page } from '@playwright/test';
import { Footer } from './footer';
import { Header } from './header';

export class ProductsPage {
    readonly page: Page;
    readonly header: Header;
    readonly productHeading: Locator;
    readonly allProducts: Locator;
    readonly productSortOptions: Locator;
    readonly footer: Footer;
    readonly productBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.productHeading = page.getByText('Products');
        this.allProducts = page.locator('div.inventory_item');
        this.productSortOptions = page.locator('select.product_sort_container');
        this.productBtn = page.locator("//div[text()='Sauce Labs Onesie']")
        this.footer = new Footer(page);
    }

    async goto(): Promise<void> {
        await this.page.goto('/inventory.html');
    }

    async addProductToCart(productName: string): Promise<void> {
        
        const product: Locator = this.allProducts.filter({ hasText: productName });
        const addToCartButton = product.locator('button');
        try {
            await addToCartButton.click();
        } catch (error) {
            throw new error(`Not Found | ${error}`)
        }       
        
    }

    async clickingProductBtn(){       
       
        try {
            await this.productBtn.click();
        } catch (error) {
            throw new error(`Not Found | ${error}`)
        }       
        
    }

    async removeProductFromCart(productName: string): Promise<void> {
        const product: Locator = this.allProducts.filter({ hasText: productName });

        const removeButton = product.locator('button');
        await removeButton.click();
    }
}
