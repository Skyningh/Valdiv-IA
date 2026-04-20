const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function testSendMessage() {
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

    const textarea = await driver.wait(
      until.elementLocated(By.xpath("//textarea[@placeholder='Escribe tu mensaje...']")),
      7000
    );
    await driver.wait(until.elementIsVisible(textarea), 5000);

    const mensajePrueba = "Hola, este es un mensaje de prueba automatizado";
    await textarea.click();
    await textarea.sendKeys(mensajePrueba);

    await textarea.sendKeys(Key.RETURN);

    const mensajeEnviado = await driver.wait(
      until.elementLocated(By.xpath(`//*[contains(text(),'${mensajePrueba}')]`)),
      7000
    );
    const textoVisible = await mensajeEnviado.isDisplayed();
    if (!textoVisible) throw new Error("El mensaje enviado no es visible en el chat");

    console.log("\nTest completado exitosamente");

  } catch (error) {
    console.log("Fallo en:", error.message);
    try {
      const pageSource = await driver.getPageSource();
      fs.writeFileSync('page_error.html', pageSource);
      console.log("HTML del error guardado en page_error.html");
    } catch (e) {
      console.log("No se pudo guardar el HTML del error");
    }
  } finally {
    await driver.quit();
  }
})();   