import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';

const SCHUHEMENU = new MenuFramework.Menu('Schuhe', '', 'Hier kannst du deine Schuhe ändern.');
const SCHUHE1 = new MenuFramework.MenuItem('', '', 'Schuh 1');
const SCHUHE2 = new MenuFramework.MenuItem('', '', 'Schuh 2');
const SCHUHE3 = new MenuFramework.MenuItem('', '', 'Schuh 3');
const SCHUHE4 = new MenuFramework.MenuItem('', '', 'Schuh 4');
const SCHUHE5 = new MenuFramework.MenuItem('', '', 'Schuh 5');
const SCHUHE6 = new MenuFramework.MenuItem('', '', 'Schuh 6');
const SCHUHE7 = new MenuFramework.MenuItem('', '', 'Schuh 7');
const SCHUHE8 = new MenuFramework.MenuItem('', '', 'Schuh 8');
const SCHUHE9 = new MenuFramework.MenuItem('', '', 'Schuh 9');
const SCHUHE10 = new MenuFramework.MenuItem('', '', 'Schuh 10');

SCHUHEMENU.addItem(SCHUHE1);
SCHUHEMENU.addItem(SCHUHE2);
SCHUHEMENU.addItem(SCHUHE3);
SCHUHEMENU.addItem(SCHUHE4);
SCHUHEMENU.addItem(SCHUHE5);
SCHUHEMENU.addItem(SCHUHE6);
SCHUHEMENU.addItem(SCHUHE7);
SCHUHEMENU.addItem(SCHUHE8);
SCHUHEMENU.addItem(SCHUHE9);
SCHUHEMENU.addItem(SCHUHE10);
SCHUHEMENU.visible = false;
SCHUHEMENU.close();


alt.onServer('CloseKleidungsladen', () => {
    SCHUHEMENU.close();
    SCHUHEMENU.visible = false;
});


alt.onServer('SCHUHE', () => {
    SCHUHEMENU.open();
    SCHUHEMENU.itemSelect.on((item, index) => {
    if (item == SCHUHE1) {
        alt.emitServer('SCHUHE1');
    }
    else if (item == SCHUHE2) {
        alt.emitServer('SCHUHE2');
    }
    else if (item == SCHUHE3) {
        alt.emitServer('SCHUHE3');
    }
    else if (item == SCHUHE4) {
        alt.emitServer('SCHUHE4');
    }
    else if (item == SCHUHE5) {
        alt.emitServer('SCHUHE5');
    }
    else if (item == SCHUHE6) {
        alt.emitServer('SCHUHE6');
    }
    else if (item == SCHUHE7) {
        alt.emitServer('SCHUHE7');
    }
    else if (item == SCHUHE8) {
        alt.emitServer('SCHUHE8');
    }
    else if (item == SCHUHE9) {
        alt.emitServer('SCHUHE9');
    }
    else if (item == SCHUHE10) {
        alt.emitServer('SCHUHE10');
    }
    });
});

