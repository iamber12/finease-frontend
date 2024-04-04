const { Builder, By } = require('selenium-webdriver');

(async function testClickableLinkOnBanner() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the home page
    await driver.get('http://localhost:3000/');

    // Find the link by its href attribute and click it
    await driver.findElement(By.css('a[href="#c-features"]')).click();

    // Wait for a short period to ensure any smooth scroll action completes
    // This is optional and can be adjusted based on how the page behaves
    await driver.sleep(1000); // wait for 1 second

    // Verify the current URL
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.endsWith('#c-features')) {
      console.log('The clickable link on the top banner works correctly.');
    } else {
      throw new Error('The clickable link on the top banner did not work as expected.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();