const { browser } = require("C:/Users/User/AppData/Roaming/npm/node_modules/protractor");

describe("'Ryanair rooms' website testing", function () {

    it("Open store main page", function () {
        browser.get("https://rooms.ryanair.com/ie/en");
        let title = browser.getTitle();
        expect(title).toBe("Rooms");
    });

});