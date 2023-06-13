import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';

const ARMEMENU = new MenuFramework.Menu('Arme', '', 'Hier kannst du deine Arme ändern.');
const ARME1 = new MenuFramework.MenuItem('', '', 'Arm 1');
const ARME2 = new MenuFramework.MenuItem('', '', 'Arm 2');
const ARME3 = new MenuFramework.MenuItem('', '', 'Arm 3');
const ARME4 = new MenuFramework.MenuItem('', '', 'Arm 4');
const ARME5 = new MenuFramework.MenuItem('', '', 'Arm 5');
const ARME6 = new MenuFramework.MenuItem('', '', 'Arm 6');
const ARME7 = new MenuFramework.MenuItem('', '', 'Arm 7');
const ARME8 = new MenuFramework.MenuItem('', '', 'Arm 8');
const ARME9 = new MenuFramework.MenuItem('', '', 'Arm 9');
const ARME10 = new MenuFramework.MenuItem('', '', 'Arm 10');

ARMEMENU.addItem(ARME1);
ARMEMENU.addItem(ARME2);
ARMEMENU.addItem(ARME3);
ARMEMENU.addItem(ARME4);
ARMEMENU.addItem(ARME5);
ARMEMENU.addItem(ARME6);
ARMEMENU.addItem(ARME7);
ARMEMENU.addItem(ARME8);
ARMEMENU.addItem(ARME9);
ARMEMENU.addItem(ARME10);
ARMEMENU.visible = false;
ARMEMENU.close();


alt.onServer('CloseKleidungsladen', () => {
    ARMEMENU.close();
    ARMEMENU.visible = false;
});


alt.onServer('ARME', () => {
    ARMEMENU.open();
    ARMEMENU.itemSelect.on((item, index) => {
    if (item == ARME1) {
        alt.emitServer('ARME1');
    }
    else if (item == ARME2) {
        alt.emitServer('ARME2');
    }
    else if (item == ARME3) {
        alt.emitServer('ARME3');
    }
    else if (item == ARME4) {
        alt.emitServer('ARME4');
    }
    else if (item == ARME5) {
        alt.emitServer('ARME5');
    }
    else if (item == ARME6) {
        alt.emitServer('ARME6');
    }
    else if (item == ARME7) {
        alt.emitServer('ARME7');
    }
    else if (item == ARME8) {
        alt.emitServer('ARME8');
    }
    else if (item == ARME9) {
        alt.emitServer('ARME9');
    }
    else if (item == ARME10) {
        alt.emitServer('ARME10');
    }
    });
});

