Feature: Delete Cart Item

    Scenario: Delete Cart Item
        Given user is in Amazon page
        And user types "Computer" on search box
        And user clicks on search button
        And user selects item "HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10 (Renewed)"
        And user selects quantity: 10
        And user clicks on Add to Cart button
        And user clicks on Cart button
        When user clicks on delete cart item button
        Then user item removed in successfully
