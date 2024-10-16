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


describe("IntainVA - Admin Fielddashboard", () => {
    it("Fielddashboard", async () => {
        const Fielddashboard = await $(
            "/html/body/div/div/div[2]/ul[1]/li[4]/a/button/span[1]/span[1]/img"
          );
          await Fielddashboard.click();
          console.log("Fielddashboard clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          await selectAndClickElementByText(elements, 'Deal Name');
          await selectAndClickElementByText(elements, 'Attribute Name');
          await selectAndClickElementByText(elements, 'Attribute Standard Name');
          await selectAndClickElementByText(elements, 'Attribute Category');
          await selectAndClickElementByText(elements, 'Attribute Display');
        
        
        
          const AddField = await $(
            "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
          );
          await AddField.click();
          console.log("Fielddashboard clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          await $("//*[@id='root_attributePoolName']").setValue("Credibly");
          console.log("Dealname entered: Credibly");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          await $("//*[@id='root_attributeName']").setValue("test");
          console.log("fieldname entered: test");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          await $("//*[@id='root_attributeStandardName']").setValue("testing");
          console.log("fieldStandardName entered: testing");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const categorybutton = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[4]/div/div/div/div"
          );
          await categorybutton.click();
          console.log("categorybutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const categoryselect = await $("/html/body/div[3]/div[3]/ul/li[2]");
          await categoryselect.click();
          console.log("categoryselect clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const DisplayUIyes = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[5]/div/div/div/label[1]/span[1]/span[1]/input"
          );
          await DisplayUIyes.click();
          console.log("DisplayUIyes clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Addfieldbutton = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
          );
          await Addfieldbutton.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Issuercertificatedashboard = await $(
            "/html/body/div/div/div[2]/ul[1]/li[5]/a/button/span[1]"
          );
          await Issuercertificatedashboard.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Addcertificatedata = await $(
            "/html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
          );
          await Addcertificatedata.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Dealname = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[1]/div/div/div/div"
          );
          await Dealname.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Dealnameselect = await $("/html/body/div[3]/div[3]/ul/li[5]");
          await Dealnameselect.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          await $('//*[@id="root_messageBody"]').setValue("testing");
          console.log("messageBody entered: testing");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Messagetype = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[3]/div/div/div/div"
          );
          await Messagetype.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Messagetypeselect = await $("/html/body/div[3]/div[3]/ul/li[2]");
          await Messagetypeselect.click();
          console.log("Addfieldbutton clicked.");
          await browser.pause(2000); // Optional: Wait for 2 seconds
        
          const Addcertificatedatabutton = await $(
            "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
          );
    })
    
})
