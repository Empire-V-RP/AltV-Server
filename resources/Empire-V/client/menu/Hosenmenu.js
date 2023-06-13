import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';

const HOSEMENU = new MenuFramework.Menu('Hosen', '', 'Hier kannst du deine Hosen ändern.');
const HOSE1 = new MenuFramework.MenuItem('', '', 'Hose 1');
const HOSE2 = new MenuFramework.MenuItem('', '', 'Hose 2');
const HOSE3 = new MenuFramework.MenuItem('', '', 'Hose 3');
const HOSE4 = new MenuFramework.MenuItem('', '', 'Hose 4');
const HOSE5 = new MenuFramework.MenuItem('', '', 'Hose 5');
const HOSE6 = new MenuFramework.MenuItem('', '', 'Hose 6');
const HOSE7 = new MenuFramework.MenuItem('', '', 'Hose 7');
const HOSE8 = new MenuFramework.MenuItem('', '', 'Hose 8');
const HOSE9 = new MenuFramework.MenuItem('', '', 'Hose 9');
const HOSE10 = new MenuFramework.MenuItem('', '', 'Hose 10');

HOSEMENU.addItem(HOSE1);
HOSEMENU.addItem(HOSE2);
HOSEMENU.addItem(HOSE3);
HOSEMENU.addItem(HOSE4);
HOSEMENU.addItem(HOSE5);
HOSEMENU.addItem(HOSE6);
HOSEMENU.addItem(HOSE7);
HOSEMENU.addItem(HOSE8);
HOSEMENU.addItem(HOSE9);
HOSEMENU.addItem(HOSE10);
HOSEMENU.visible = false;
HOSEMENU.close();


alt.onServer('CloseKleidungsladen', () => {
    HOSEMENU.close();
    HOSEMENU.visible = false;
});


alt.onServer('HOSEN', () => {
    HOSEMENU.open();
    HOSEMENU.itemSelect.on((item, index) => {
    if (item == HOSE1) {
        alt.emitServer('HOSE1');
    }
    else if (item == HOSE2) {
        alt.emitServer('HOSE2');
    }
    else if (item == HOSE3) {
        alt.emitServer('HOSE3');
    }
    else if (item == HOSE4) {
        alt.emitServer('HOSE4');
    }
    else if (item == HOSE5) {
        alt.emitServer('HOSE5');
    }
    else if (item == HOSE6) {
        alt.emitServer('HOSE6');
    }
    else if (item == HOSE7) {
        alt.emitServer('HOSE7');
    }
    else if (item == HOSE8) {
        alt.emitServer('HOSE8');
    }
    else if (item == HOSE9) {
        alt.emitServer('HOSE9');
    }
    else if (item == HOSE10) {
        alt.emitServer('HOSE10');
    }
    });
});

