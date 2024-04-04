const { Builder, By, Key, until } = require('selenium-webdriver');

(async function createQuickProposal() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Login
    await driver.get('http://localhost:3000/auth/sign-in');
    await driver.wait(until.elementLocated(By.id('email')), 10000);
    await driver.findElement(By.id('email')).sendKeys('newtest@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('hello123', Key.RETURN);
    await driver.wait(until.urlIs('http://localhost:3000/main/dashboard'), 10000);

    // Click on the "Quick Proposal" button
    await driver.findElement(By.xpath('//button[text()="Quick Proposal"]')).click();
    await driver.wait(until.elementLocated(By.id('min-lending-amount')), 10000);

    // Fill out the fields in the dialog box
    await driver.findElement(By.id('min-lending-amount')).sendKeys('1000');
    await driver.findElement(By.id('max-lending-amount')).sendKeys('5000');
    await driver.findElement(By.id('min-interest-rate')).sendKeys('5');
    await driver.findElement(By.id('max-interest-rate')).sendKeys('10');

    // Select loan duration (example: selecting the second option in a dropdown)
    const loanDurationDropdown = await driver.findElement(By.id('loan-duration'));
    await loanDurationDropdown.click();
    await driver.findElement(By.xpath('//option[text()="3 months"]')).click();

    // Enter description
    await driver.findElement(By.id('description')).sendKeys('This is a quick proposal');

    // Click on the "Create Proposal" button
    await driver.findElement(By.xpath('//button[text()="Create Proposal"]')).click();
    
    // Wait for the success message
    await driver.wait(until.elementLocated(By.xpath('//div[text()="Successfully Submitted"]')), 10000);
    
    // Print success message
    console.log('Proposal created successfully');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
