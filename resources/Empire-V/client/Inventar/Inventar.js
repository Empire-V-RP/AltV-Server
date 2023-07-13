import * as alt from 'alt-client';
import * as game from 'natives';

let inventarBrowser = null;

alt.onServer("CEF:InventarBrowser:Open", () => {
    if (!inventarBrowser) {
        inventarBrowser = new alt.WebView("https://resources/Empire-V/client/Inventar/cef/index.html");
        inventarBrowser.focus();
        alt.showCursor(true);

        // Disable player movement
        game.disableControlAction(0, 30, true); // INPUT_MOVE_LEFT_RIGHT
        game.disableControlAction(0, 31, true); // INPUT_MOVE_UP_DOWN
        game.disableControlAction(0, 21, true); // INPUT_SPRINT
        game.disableControlAction(0, 22, true); // INPUT_JUMP
    }
});

alt.onServer("CEF:InventarBrowser:Close", () => {
    if (inventarBrowser) {
        inventarBrowser.unfocus();
        alt.showCursor(false);
        inventarBrowser.destroy();

        // Enable player movement
        game.disableControlAction(0, 30, false); // INPUT_MOVE_LEFT_RIGHT
        game.disableControlAction(0, 31, false); // INPUT_MOVE_UP_DOWN
        game.disableControlAction(0, 21, false); // INPUT_SPRINT
        game.disableControlAction(0, 22, false); // INPUT_JUMP
    }
});
