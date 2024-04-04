const { Builder, By, until } = require('selenium-webdriver');

(async function testClickableLinkToAboutUs() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the home page
    await driver.get('http://localhost:3000/');

    // Wait for the "About Us" link to be clickable before clicking
    const aboutUsLink = await driver.wait(until.elementLocated(By.css('a[href="#aboutus"]')), 10000); // Wait up to 10 seconds
    await aboutUsLink.click();

    // Wait for a short period to ensure any smooth scroll action completes
    await driver.sleep(1000); // Optional: adjust based on the actual behavior of your webpage

    // Verify the current URL
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.endsWith('#aboutus')) {
      console.log('The clickable link to "About Us" works correctly.');
    } else {
      throw new Error('The clickable link to "About Us" did not work as expected.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();