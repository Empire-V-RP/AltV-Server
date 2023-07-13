$(() => {
    // Function to retrieve items from the server
    function getItemsFromServer() {
        return new Promise((resolve, reject) => {
            alt.emit("CLIENT:INVENTAR:REQUEST_ITEMS_FROM_DATABASE");
            alt.on("CLIENT:INVENTAR:ITEMS_FROM_DATABASE", (items) => {
                resolve(items);
            });
        });
    }

    // Function to update the inventory on the client-side
    function updateInventory(items) {
        const inventoryList = $("#inventory");
        inventoryList.empty();

        for (const item of items) {
            const listItem = $("<li>");
            const itemName = $("<span>").addClass("item-name").text(item.itemName);
            const itemQuantity = $("<span>").addClass("item-quantity").text(item.menge);

            listItem.append(itemName, itemQuantity);
            inventoryList.append(listItem);
        }
    }

    // Function to check for inventory updates every second
    function checkInventoryUpdates() {
        getItemsFromServer().then((items) => {
            updateInventory(items);
        });

        setTimeout(checkInventoryUpdates, 1000);
    }

    // Initial call to start checking for inventory updates
    checkInventoryUpdates();
});
