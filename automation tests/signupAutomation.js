const {Builder, By, Key, until} = require('selenium-webdriver');

(async function signupAutomation() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the signup page
    await driver.get('http://localhost:3000/auth/sign-up');

    // Wait for the first name field to be present and fill it in
    await driver.wait(until.elementLocated(By.id('name')), 10000);
    await driver.findElement(By.id('name')).sendKeys('John');

    // Fill in the last name
    await driver.findElement(By.id('lname')).sendKeys('Doe');

    // Fill in the email
    await driver.findElement(By.id('email')).sendKeys('johndoe@example.com');

    // Fill in the address
    await driver.findElement(By.id('address')).sendKeys('123 Main St, Anytown, USA');

    // Select account type (assuming dropdown has id 'accountType' and options are value-based)
    await driver.findElement(By.id('accountType')).sendKeys('Borrower', Key.RETURN); //dd/mm/yy

    // Fill in the date of birth (formatting will depend on how the field is implemented)
    await driver.findElement(By.id('dob')).sendKeys('04/03/1994');

    // Fill in the password
    await driver.findElement(By.id('password')).sendKeys('password123');

    // Fill in the verify password
    await driver.findElement(By.id('vPassword')).sendKeys('password123');

    // Submit the signup form (assuming the form is submitted by clicking a button with id 'submit')
    await driver.findElement(By.id('submit')).click();

    // Optionally, wait for a specific redirect or confirmation message to appear as a sign of successful signup


    await driver.wait(until.urlIs('http://localhost:3000/auth/sign-in'), 10000);
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl === 'http://localhost:3000/auth/sign-in') {
      console.log('Sign up successful');
    } else {
      throw new Error('Sign-up failed or did not redirect to the expected URL.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await driver.quit();
  }
})();

