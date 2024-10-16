async function selectAndClickElementByText(elements, textToFind) {
  for (const el of elements) {
      const text = await el.getText();
      if (text === textToFind) {
          console.log(`Clicking on element with text: ${textToFind}`);
          await el.click(); 
          return; 
      }
  }
  console.log(`No matching element found for: ${textToFind}`);
}


describe("IntainVA Admin processorDashboard", () => {

  it ("admin processorDashboard Incorrect arguments", async () => {
    const processor = await $(
      "/html/body/div/div/div[2]/ul[1]/li[3]/a/button/span[1]/span[1]/img"
    );
    await processor.click();
    console.log("processor clicked.");
    await browser.pause(3000); 


    const Addprocessor = await $(
      "/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]"
    );
    await Addprocessor.click();
    console.log("Addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_name"]').setValue("Udhay");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_userlastname"]').setValue("kumar");
    console.log("Email entered: kumar");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_emailid"]').setValue("udhaya.kumar.com");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds


    await browser.execute(() => {
      window.__apiResponses = [];
      const originalFetch = window.fetch;
      window.fetch = function () {
          return originalFetch.apply(this, arguments).then((response) => {
              response.clone().json().then((data) => {
                  window.__apiResponses.push({
                      url: arguments[0],  
                      status: response.status, 
                      data: data  
                  });
              });
              return response;
          });
      };

   
      const open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
          this.addEventListener('load', function () {
              try {
                  const responseJSON = JSON.parse(this.responseText);
                  window.__apiResponses.push({
                      url: this.responseURL,  
                      status: this.status, 
                      data: responseJSON  
                  });
              } catch (e) {
                  console.error('Error parsing JSON response:', e);
              }
          });
          open.apply(this, arguments);
      };
  });


    const addprocessor = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
    );
    await addprocessor.click();

     // Retrieve the captured API responses
     const apiResponses = await browser.execute(() => {
      return window.__apiResponses;
  });
  console.log('Captured API Responses:', apiResponses);

  // Filter only responses with non-200 status (errors)
  const errorResponses = apiResponses.filter(response => response.status !== 200);

  // Log the error responses
  console.log('Error API Responses:', errorResponses);

  const loginResponse = errorResponses.find(response => response.url.includes('/JWT_TOKEN'));
  expect(loginResponse).toBeDefined();
  expect(loginResponse.status).toBe(422);  

  expect(loginResponse.data).toHaveProperty('message'); 
  expect(loginResponse.data.message).toContain('Please Enter Valid Emailid'); 


    await browser.refresh();
  await browser.pause(2000);
  })


  
  it("processorDashboard correct arguments", async () => {

    await selectAndClickElementByText(elements, 'Processor')
    await selectAndClickElementByText(elements, 'Email ID')
    await selectAndClickElementByText(elements, 'Role')
    await selectAndClickElementByText(elements, 'Deals')

    const Addprocessor = await $(
      "/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]"
    );
    await Addprocessor.click();
    console.log("Addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_name"]').setValue("Udhay");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_userlastname"]').setValue("kumar");
    console.log("Email entered: kumar");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_emailid"]').setValue("udhaya.kumar@intainft.com");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    

    const addprocessor = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
    );
    await addprocessor.click();
    console.log("addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

  })
})
