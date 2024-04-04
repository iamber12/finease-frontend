const {Builder, By, Key, until} = require('selenium-webdriver');

(async function loginAutomation() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000/auth/sign-in');

    // Wait for the email field to be present before attempting to find and interact with it
    await driver.wait(until.elementLocated(By.id('email')), 10000);
    await driver.findElement(By.id('email')).sendKeys('newtest@gmail.com');

    // Assuming the password field is immediately available after the email field
    await driver.findElement(By.id('password')).sendKeys('hello123', Key.RETURN);

    // Wait for redirect and check URL
    await driver.wait(until.urlIs('http://localhost:3000/main/dashboard'), 10000);
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl === 'http://localhost:3000/main/dashboard') {
      console.log('Login Successful');
    } else {
      throw new Error('Login failed or did not redirect to the expected URL.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await driver.quit();
  }
})();