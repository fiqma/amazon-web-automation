Feature: Delete Cart Item

    Scenario: Delete Cart Item
        Given user is in Amazon page
        And user types "Computer" on search box
        And user clicks on search button
        And user selects item "HP Elite 800G1 Desktop Computer Package - Intel Quad Core i5 3.3GHz, 16GB RAM, 240GB SSD 2TB HDD, Windows 10 Pro, Dual 19 inch Monitors, Keyboard, Mouse (Renewed)"
        And user selects quantity: 10
        And user clicks on Add to Cart button
        And user clicks on Cart button
        When user clicks on delete cart item button
        Then item removed successfully
