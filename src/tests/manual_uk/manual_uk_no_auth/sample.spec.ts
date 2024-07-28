import {test, expect} from "../../../fixtures/base";

test("sample 1 test: Development Enviroment", async ({page}) => {
    await page.goto("https://devel.manual.co/skin/kit");
    await page.waitForTimeout(10000); 
    await expect(page.getByTestId("pageTitle")).toContainText("Skin Kit");
    await expect(page.getByTestId("pagePrice")).toContainText("£35.00 one time purchase");
    await page.getByRole("button", {name: "Add to cart"}).click();

    await page.goto("https://devel.manual.co/skin");
});

test("sample 2 test: Production Enviroment", async ({page}) => {
    await page.goto("https://manual.co/skin/kit");
    await expect(page.getByTestId("pageTitle")).toContainText("Skin Kit");
    await expect(page.getByTestId("pagePrice")).toContainText("£35.00 one time purchase");
    await page.getByRole("button", {name: "Add to cart"}).click();
});