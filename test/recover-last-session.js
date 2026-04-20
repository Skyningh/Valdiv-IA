const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function testChatFlow() {
  let options = new chrome.Options();
  options.setChromeBinaryPath("/usr/bin/brave-browser");

  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3005');
    await driver.findElement(By.xpath("//a[text()='Login']")).click();
    await driver.wait(until.urlContains('login'), 5000);
    await driver.findElement(By.name('email')).sendKeys('prueba@gmail.com');
    await driver.findElement(By.name('password')).sendKeys('pruebaautomatizada');
    await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
    await driver.wait(until.urlContains('chat'), 5000);

    await driver.wait(
      until.elementLocated(By.xpath("//p[text()='Historial']")),
      7000
    );
    await driver.sleep(1000);

    await driver.executeScript(`
      const buttons = document.querySelectorAll('.chakra-stack button');
      if (buttons.length > 0) buttons[0].click();
    `);
    console.log("Chat seleccionado");

    await driver.sleep(3000);

  } catch (error) {
    console.log("Falló en:", error.message);
    try {
      const pageSource = await driver.getPageSource();
      fs.writeFileSync('page_error.html', pageSource);
    } catch (e) {}
  } finally {
    await driver.quit();
  }
})();