const {test,expect}  = require('@playwright/test')

test('Browser context playwright test',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.linkedin.com");
    console.log(page.title);
    //await expect(page).toHaveTitle("linkedin");
    await page.locator("a[class='sign-in-form__sign-in-cta my-2 py-1 btn-md btn-secondary block min-h-[40px] babybear:w-full']").click();
    await page.locator("#username").fill("sss");
    await page.locator("#password").fill("sss");
    await page.locator("#organic-div > form > div.login__form_action_container > button").click();
});

test.only('Page playwright test', async ({ page }) => {
    await page.goto('https://www.google.com');
    console.log(page.title);
    await expect(page).toHaveTitle("Google");
});

test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})